import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children,...rest}) => {
  const {isAdmin, isLog, failed} = useSelector(state => ({
    isAdmin: state.profile.myProfile.isAdmin,
    isLog: state.profile.isLog,
    failed: state.profile.get.failed,
  }))

  // Если это админ, то ему доступен данный роут
  return (
  <Route {...rest} render={()=> (
    isAdmin && isLog ? (children) : failed ? (<Redirect to={'/'}/>) : null  
  )}/>);
}

export default PrivateRoute;