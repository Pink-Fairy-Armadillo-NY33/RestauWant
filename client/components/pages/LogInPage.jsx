import React, { useState, useEffect } from 'react';

// import React from 'react';

function LogIn(props) {
  return (
    <div className=''>
      <h1>Sign In </h1>

      <form>
        <div className=''>
          <input
            className=''
            placeholder='Username'
            type='text'
            id='Username'
            name='Username'
            required
          />
          <label htmlFor='Username'>Username </label>
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
          <label htmlFor='password'>Password </label>
        </div>
        <div className=''>
          <input
            value='Log In'
            className=''
            type='button'
            // onClick={props.helperFunc}
          />
        </div>
      </form>
    </div>
  );
}

export default LogIn;
