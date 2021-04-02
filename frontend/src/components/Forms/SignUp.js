import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { handleSignUpActionCreator } from '../../store/actions/signUp';
import { useSelector } from 'react-redux';

const SignUp = ({setShowSignUp}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [validate, setValidate] = useState(false)

  const {loading} = useSelector( state => ({
    loading: state.signUp.post.loading
  }))

  const dispatch = useDispatch()

  const handleSignUp = (e) => {
    e.preventDefault()
    if (email !== '' && password !== '' && fullname !== '' && address !== '' && phone !== '') { // Минимальная валидация
      dispatch(handleSignUpActionCreator(email, fullname, password, address, phone, setShowSignUp))
    }
    else setValidate(true)
  }

  return (
      <form className='sign__up'>
         <h1 className='title'>SignUp</h1>
        <label htmlFor='email'>Email</label>
        <input 
          onFocus={() => setValidate(false)}
          type='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='email'>Password</label>
        <input 
          onFocus={() => setValidate(false)}
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          />
        <label htmlFor='fullname'>Fullname</label>
        <input 
          onFocus={() => setValidate(false)}
          id='fullname'
          onChange={(e) => setFullname(e.target.value)}
          />
        <label htmlFor='address'>Address</label>
        <input 
          onFocus={() => setValidate(false)}
          id='address'
          onChange={(e) => setAddress(e.target.value)}
          />
        <label htmlFor='phone'>Phone</label>
        <input 
          onFocus={() => setValidate(false)}
          id='phone'
          type='number'
          onChange={(e) => setPhone(e.target.value)}
          />
        <button onClick={handleSignUp}>
          {loading ? <div className='loading'></div> : 'Sign Up'}
        </button>
        <div className='text'>
          <div className='text__error'>{validate ? 'fill all data' : null}</div>
          <div className='text__btn' onClick={() => setShowSignUp(false)}>Sign In</div>
        </div>
      </form>
  )
}

export default SignUp
