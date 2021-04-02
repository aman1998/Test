import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IsAuthRoute = ({children,...rest}) => {
  const {isLog, success, failed} = useSelector(state => ({
    isLog: state.profile.isLog,
    success: state.profile.get.success,
    failed: state.profile.get.failed,
  }))

  // Если пользователь не авторизован, то его перекидывает на страницу авторизации
  return (
  <Route {...rest} render={()=> (
    isLog ? (children) : failed ? (<Redirect to='/sign'/>) : null
  )}/>);
}

export default IsAuthRoute;