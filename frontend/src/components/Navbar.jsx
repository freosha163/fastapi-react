import React, { useState } from 'react';
import { ReactComponent as PhoneIcon } from '../images/phone.svg';
import { ReactComponent as EmailIcon } from '../images/email.svg';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='top-nav'>
        <div className='contact-container'>
          <div className='contact-number'>
            <PhoneIcon className='contact-icon'/>
            <span>+7 (927) 617-12-86</span>
          </div>
          <div className='contact-email'>
            <EmailIcon className='contact-icon'/>
            <span>12-freon@mail.ru</span>
          </div>
          <div className='order-call'>
            <span>Заказать звонок</span>
          </div>
        </div>
      </div>
      <div className='bottom-nav'>
        <div className='bottom-container'>
        <a href='#services' className='nav-link' >Услуги</a>
        <a href='#reviews' className='nav-link' >Отзывы</a>
        <a href='#contacts' className='nav-link' >Контакты</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;