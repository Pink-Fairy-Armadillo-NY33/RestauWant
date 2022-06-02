import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import React from 'react';

function LogIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const sendToVerify = () => {
  //   axios.post(URL_TO_VERIFY, {
  //     username: username,
  //     password: password,
  //   })
  // }
  return (
    <div className='logback'>
      <div className='logbox'>
        <h2>Please Log in below </h2>

        <a href="http://localhost:8080/auth/google" className='googleAuth-btn'>
          <img
            src='https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png'
            alt='GOOGLE'
          />
          oogle
        </a>
        <div className='or'>OR</div>

        <div className=''>
          <input
            className=''
            placeholder='Username'
            type='text'
            id='Username'
            name='Username'
            required
          />
        </div>

        <div className=''>
          <input
            className=''
            placeholder='Password'
            type='password'
            id='password'
            name='password'
            required
          />
        </div>

        <input
          value='Log In'
          className='logbtn'
          type='button'
          // onClick={props.helperFunc}
        />
      </div>
    </div>
  );
}

export default LogIn;
