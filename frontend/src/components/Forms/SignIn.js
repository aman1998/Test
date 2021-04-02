import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { handleSignInActionCreator } from '../../store/actions/signIn';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const SignIn = ({setShowSignUp}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validate, setValidate] = useState(false)

  const {loading} = useSelector( state => ({
    loading: state.signIn.post.loading
  }))

  const dispatch = useDispatch()
  let history = useHistory();

  const handleRedirect = () => {
    history.push('/');
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    if(email !== '' && password !== '') { // Минимальная валидация
      dispatch(handleSignInActionCreator(email, password, handleRedirect))
    }
    else setValidate(true)
  }

  return (
      <form className='sign__in'>
        <h1 className='title'>SignIn</h1>
        <input 
          onFocus={() => setValidate(false)}
          type='email'
          placeholder='email' 
          onChange={(e) => setEmail(e.target.value)}/>
        <input 
          onFocus={() => setValidate(false)}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          />
        <button onClick={handleSignIn}>
          {loading ? <div className='loading'></div> : 'Sign In'}
        </button>
        <div className='text'>
          <div className='text__error'>{validate ? 'fill all data' : null}</div>
          <div className='text__btn' onClick={() => setShowSignUp(true)}>Create account</div>
        </div>
      </form>
  )
}

export default SignIn
