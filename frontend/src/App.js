import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileActionCreator } from './store/actions/profile';

import { GET_PROFILE_FAILED } from './store/actionTypes';
import './assets/styles/styles.scss';

import PrivateRoute from './routes/IsAuthRoute';
import AdminRoute from './routes/AdminRoute';
import MainPage from './pages/MainPage';
import SignPage from './pages/SignPage';
import AdminPage from './pages/AdminPage';

function App() {
  const {isLog} = useSelector( state => ({
    isLog: state.profile.isLog,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      dispatch(handleProfileActionCreator()) // Запрос на получение данных об юзере если есть токен в LocalStorage
    }
    else dispatch({ type: GET_PROFILE_FAILED })
  }, [isLog])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/sign' component={SignPage} exact/>
        <PrivateRoute path='/' exact >
            <MainPage />
        </PrivateRoute>
        <AdminRoute path='/admin' exact >
            <AdminPage />
        </AdminRoute>
      </Switch>
  </BrowserRouter>
  )
}

export default App
