const Router = require('express')
const User = require('../models/User')
const authMiddleware = require('../middleware/auth.middleware')
const config = require('config')
const router = new Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Регистрация
router.post('/signup', 
async (req, res) => {
  try {
    const { email, fullname, password, address, phone } = req.body
    const isAdmin = false;
    const hashPassword = await bcrypt.hash(password, 8) 
    const user = new User({email, fullname, password: hashPassword, address, phone, isAdmin })

    const checkEmail = await User.findOne({email})
    if(checkEmail) {
      return res.status(400).json({message: 'email already exist'})
    }

    await user.save()
    return res.json({message: 'success created'})
  }
  catch (e) {
    console.log(e)
    res.send({message: 'server error'})
  }
})

// Логин
router.post('/signin', 
async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({email})
    if(!user) {
      return res.status(400).json({message: 'not found'})
    }

    const isPassValid = bcrypt.compareSync(password, user.password)
    // if (!isPassValid) {
    //     return res.status(400).json({message: "Invalid password"})
    // }

    const token = jwt.sign({id: user.id}, config.get('tokenKey'), {expiresIn: '1h'})
    return res.json({
      token,
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        address: user.address,
        phone: user.phone
      }
    })
  }
  catch (e) {
    console.log(e)
    res.send({message: 'server error'})
  }
})


// Все зарегистрованные пользователи
router.get('/users', async(req,res) => {
  let users = await User.find()
  console.log(users)
  return res.json(users)
})


// Получение данных пользователя
router.get('/me', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})
            return res.json({
                user: {
                  id: user.id,
                  fullname: user.fullname,
                  email: user.email,
                  address: user.address,
                  phone: user.phone,
                  isAdmin: user.isAdmin
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

module.exports = router