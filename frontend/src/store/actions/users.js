import {auth} from "../../axios/axios";
import {GET_USERS, GET_USERS_FAILED, GET_USERS_LOADING, GET_USERS_SUCCESS} from "../actionTypes";

export const handleUsersActionCreator = () => dispatch => {
  dispatch({type: GET_USERS_LOADING})
  auth.get('/users/')
    .then(({data}) => {
      dispatch({type: GET_USERS_SUCCESS})
      dispatch(getUsers(data))
      console.log(data)
    })
    .catch(e => {
      console.log(e)
      dispatch({type: GET_USERS_FAILED})
    })
}


export const getUsers = (users) => ({
  type: GET_USERS,
  users
})

