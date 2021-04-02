import { combineReducers } from 'redux';
import signUp from './signUp';
import signIn from './signIn';
import profile from './profile';
import users from './users';

export default combineReducers({
  signUp,
  signIn,
  profile,
  users
})