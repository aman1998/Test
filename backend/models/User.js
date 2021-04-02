const { Schema, model } = require('mongoose')

const User = ({
  email: {type: String, required: true},
  fullname: {type: String, required: true},
  password: {type: String, required: true},
  address: {type: String, required: true},
  phone: {type: Number, required: true},
  isAdmin: {type: Boolean}
})

module.exports = model('User', User)