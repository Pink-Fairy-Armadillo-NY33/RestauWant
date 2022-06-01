import React, { useState, useEffect } from 'react';

// import React from 'react';

function LogIn(props) {
  return (
    <div className='logback'>

      <div className='logbox'>
        <h1>Log in Here</h1>

        <button>
          < img src="https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png" alt="GOOGLE" /> Google
        </button>


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
        <div className=''>
          <input
            value='Log In'
            className=''
            type='button'
            // onClick={props.helperFunc}
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
