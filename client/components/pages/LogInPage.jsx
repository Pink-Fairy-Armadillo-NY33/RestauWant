import React, { useState, useEffect } from 'react';

// import React from 'react';

function LogIn(props) {
  return (
    <div className='logback'>
      <div className='logbox'>
        <h2>Please Log in below </h2>

        <button className='googleAuth-btn'>
          <img
            src='https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png'
            alt='GOOGLE'
          />
          oogle
        </button>
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
