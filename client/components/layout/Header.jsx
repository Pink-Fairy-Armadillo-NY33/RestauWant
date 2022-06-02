import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const [userVerf, setVerf] = useState(null);
  const [userName, setName] = useState(null);

  useEffect(() => {
    axios.get('/getGUser', { withCredentials: true }).then((response) => {
      console.log('HEADER GETTING USER: ', response.data);
      if (response.data.verified) {
        setVerf(response.data.verified);
        setName(response.data.fullName);
      }
    });
  }, []);

  const log_signBTN = (
    <div className='btn-group'>
      <Link className='login-btn btn' to='/login'>
        Log In
      </Link>
      <Link className='signup-btn btn' to='/signup'>
        Sign Up
      </Link>
    </div>
  );

  const logOutFunc = () => {
    axios.get('/logout', { withCredentials: true }).then((response) => {
      // console.log('LOGGING OUT RESPONSE: ', response);
      if (response.data) {
        setVerf(null);
      }
    });
  };
  console.log(userName);
  // console.log(user.verified);
  const logOut = (
    <div className='btn-group'>
      <h5>Welcome, {userName}</h5>
      <button onClick={logOutFunc} className='login-btn btn'>
        Log Out
      </button>
    </div>
  );

  // user;

  return (
    <div className='Header'>
      <a className='logo' href='/'>
        RestauWant
      </a>
      {userVerf ? logOut : log_signBTN}
    </div>
  );
}
