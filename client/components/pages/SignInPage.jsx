import React, { useState, useEffect } from 'react';

// import React from 'react';

function SignUp(props) {
  return (
    <div className='logback'>
      <div className='signbox'>
        <h2>Sign Up </h2>
        <div className=''>
          <input
            className=''
            placeholder='Name'
            type='text'
            id='fullName'
            name='fullName'
            required
          />
        </div>
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
            placeholder='Email'
            type='email'
            id='email'
            name='email'
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
        <div className=''>
          <input
            value='Sign Up!'
            className='signbtn'
            type='button'
            // onClick={props.helperFunc}
          />
        </div>
        <div className='or'>OR</div>
        <p>Please use your google account to sign up:</p>
        <a href='http://localhost:8080/auth/google' className='googleAuth-btn'>
          <img
            src='https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png'
            alt='GOOGLE'
          />
          oogle
        </a>
      </div>
    </div>
  );
}

export default SignUp;
