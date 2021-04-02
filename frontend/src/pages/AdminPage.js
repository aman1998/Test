import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { handleUsersActionCreator } from '../store/actions/users';

import Photo from '../assets/images/photo.jpeg'

const AdminPage = () => {
  const { users, loading, success } = useSelector((state) => ({
    loading: state.users.get.loading,
    success: state.users.get.success,
    users: state.users.users,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleUsersActionCreator()) // Запрос к БД для получения списка пользователей
  }, [])

  return (
    <section className='admin'>
      <header className='admin__header'>
       <NavLink className='link' to='/' exact><img src={Photo} className='image' alt='logo' /></NavLink>
      </header>
      <div className='admin__content container'>
        {
          loading ? <div className='loading'></div> :
          success ? 
            <div className='users'>
              <div className='users__title'>Зарегистрованные пользователи</div>
              {
              users.map(user => (
                <div key={user._id} className='user'>
                  <div className='item'>
                    <div className='item__title'>Email</div>
                    <div className='item__value'>{user.email}</div>
                  </div>
                  <div className='item'>
                    <div className='item__title'>Fullname</div>
                    <div className='item__value'>{user.fullname}</div>
                  </div>
                  <div className='item'>
                    <div className='item__title'>Address</div>
                    <div className='item__value'>{user.address}</div>
                  </div>
                  <div className='item'>
                    <div className='item__title'>Email</div>
                    <div className='item__value'>{user.phone}</div>
                  </div>
                </div>
              ))
              }
            </div>
          : null
        }
      </div>
    </section>
  )
}

export default AdminPage
