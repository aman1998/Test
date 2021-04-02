import {auth} from '../../axios/axios';
import {SIGN_UP_SUCCESS, SIGN_UP_LOADING, SIGN_UP_FAILED} from '../actionTypes';

export const handleSignUpActionCreator = (email, fullname, password, address, phone, setShowSignUp) => dispatch => {
  dispatch({type: SIGN_UP_LOADING})
  auth.post('/signup/', {fullname, email, password, address, phone})
    .then((res) => {
      console.log(res)
      dispatch({type: SIGN_UP_SUCCESS})
      setShowSignUp(false)
    })
    .catch((e) => {
      console.log('error', e)
      dispatch({type: SIGN_UP_FAILED})
    })
}