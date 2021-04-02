import {auth} from '../../axios/axios';
import {SIGN_IN_SUCCESS, SIGN_IN_LOADING, SIGN_IN_FAILED} from '../actionTypes';
import { checkIsLog } from './profile';

export const handleSignInActionCreator = (email, password, handleRedirect) => dispatch => {
  dispatch({type: SIGN_IN_LOADING})
  console.log(email, password)
  auth.post('/signin/', {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token)
      console.log(data)
      dispatch(checkIsLog(true))
      dispatch({type: SIGN_IN_SUCCESS})
      handleRedirect()
    })
    .catch((e) => {
      console.log('error', e.message)
      dispatch({type: SIGN_IN_FAILED})
      dispatch(checkIsLog(false))
    })
}
