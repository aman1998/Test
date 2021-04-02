import {  GET_USERS,
  GET_USERS_LOADING, 
  GET_USERS_SUCCESS, 
  GET_USERS_FAILED
} from "../actionTypes"

const initialState = {
users: [],
get: {
success: false,
loading: false,
failed: false,
error: '',
}
}

const users = (state = initialState, action) => {
switch (action.type) {
case GET_USERS:
return {
...state,
users: action.users,
}
case GET_USERS_LOADING:
return {
  ...state,
  get: {
    success: false,
    loading: true,
    failed: false,
    error: '',
  },
}
case GET_USERS_SUCCESS:
return {
  ...state,
  get: {
    success: true,
    loading: false,
    failed: false,
    error: '',
  },
}
case GET_USERS_FAILED:
return {
  ...state,
  get: {
    success: false,
    loading: false,
    failed: true,
    error: '',
  },
}
default:
return state
}
}

export default users