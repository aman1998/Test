import {
  GET_TOKEN, 
  IS_LOG, 
  GET_PROFILE,
  GET_PROFILE_FAILED, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_SUCCESS
} from "../actionTypes"

import {auth} from '../../axios/axios'

export const handleProfileActionCreator = () => dispatch => {
  dispatch({ type: GET_PROFILE_LOADING })
  const token = localStorage.getItem('token')
  auth.get('/me/', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(({data}) => {
      dispatch(getProfile(data.user))
      dispatch(checkIsLog(true))
      dispatch({ type: GET_PROFILE_SUCCESS})
      // console.log(data)
    })
    .catch((e) => {
      console.log(e.message)
      dispatch(checkIsLog(false))
      dispatch(getToken(''))
      dispatch({ type: GET_PROFILE_FAILED })
    })
}

export const handleLogoutActionCreator = (handleRedirect) => dispatch  => {
	localStorage.removeItem('token')
  dispatch(getProfile({}))
  dispatch(checkIsLog(false))
  handleRedirect()
}

export const getProfile = (myProfile) => ({
  type: GET_PROFILE,
  myProfile
})


export const checkIsLog = (isLog) => ({
  type: IS_LOG,
  isLog
})

export const getToken = (token) => ({
  type: GET_TOKEN,
  token
})
