import React from 'react';
import { useSelector } from 'react-redux';

import PageTemplate from '../components/Template/PageTemplate'

const MainPage = () => {
  const {email, fullname, address, phone} = useSelector( state => ({
    email: state.profile.myProfile.email,
    fullname: state.profile.myProfile.fullname,
    address: state.profile.myProfile.address,
    phone: state.profile.myProfile.phone,
  }))

  return (
    <PageTemplate>
      <section className='profile__wrapper container'>
        <h1 className='title'>Profile</h1>
        <div className='profile '>
          <div className='profile__info'>
            <div>email</div> 
            <div className='value'>{email}</div>  
          </div>
          <div className='profile__info'>
            <div>fullname</div> 
            <div className='value'>{fullname}</div>  
          </div>
          <div className='profile__info'>
            <div>address</div> 
            <div className='value'>{address}</div>  
          </div>
          <div className='profile__info'>
            <div>phone</div> 
            <div className='value'>{phone}</div>  
          </div>
          <div className='avatar'></div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default MainPage