import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import * as actions from '../actions/actions.jsx';
// import from child components...

const mapStateToProps = state => ({
  isLoggedIn: state.users.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  checkLogin: async (usernameInput, passwordInput) => {
    const data = await actions.checkLogin(usernameInput, passwordInput);
    // console.log('data in dispatch', data);
    data.data.isLoggedIn === true ? dispatch(actions.checkUserLogin(data.data.isLoggedIn, data.data.username, data.data.profilePicture)) : '';
  }
});


// const checkLoginInfo = async () => {
//   const response = await axios.get('/');
//   return response;
// };

const LoginContainer = props => {

  let usernameInput;
  function usernameData (e) {
  // console.log('usernameInput', usernameInput);
    usernameInput = e.target.value;
    return usernameInput;
  }

  let passwordInput;
  function passwordData (e) {
    // console.log('passwordInput', passwordInput);
    passwordInput = e.target.value;
    return passwordInput;
  }
  
  return (
    <div>
      <input id="username" placeholder="username" onChange= { usernameData } required></input>
      <br></br><br></br>
      <input id="password" type="password" placeholder="password" onChange= { passwordData }></input>
      <br></br><br></br>
      <Link id="signUpButton" to="/api/signup"> Sign up </Link>
      <br></br><br></br>
      <button id="loginButton" onClick={() => props.checkLogin(usernameInput, passwordInput) }> Login </button>
      <br></br>
      <br></br>
      {props.isLoggedIn ? <Link to="/api/home"> UHNGHHHHHHHH </Link> : <Link to="/api/home"> Continue As Guest (not recommended) </Link>}
      {/* {props.isLoggedIn ? <p> UHNGHHHHHHHH </p> : ''} */}
      <Outlet/>
    </div>
  );
};

export default connect (mapStateToProps, mapDispatchToProps)(LoginContainer);