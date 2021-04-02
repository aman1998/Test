import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory  } from 'react-router-dom';
import { handleLogoutActionCreator } from '../../store/actions/profile';

import Photo from '../../assets/images/photo.jpeg'

const Header = () => {
  const {isAdmin} = useSelector(state => ({
    isAdmin: state.profile.myProfile.isAdmin
  }))

  const dispatch = useDispatch()
  let history = useHistory();

  const handleRedirect = () => {
    history.push('/');
  }

  const handleLogout = () => {
    dispatch(handleLogoutActionCreator(handleRedirect))
  }

  return (
    <header className='header'>
      <div className='container'>
        <img src={Photo} alt='logo' className='image' />
        <div className='right'>
          {
            isAdmin ? 
            <NavLink className='link' to='/admin' exact>Admin Panel</NavLink> :
            null
          }
          <button className='btn' onClick={handleLogout}>Выйти</button>
        </div>
      </div>
    </header>
  )
}

export default Header