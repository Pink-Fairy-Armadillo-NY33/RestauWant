import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

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

const signUp = async (usernameInput, passwordInput) => {
  const data = await axios.post('/api/user/signup', 
    {
      username: usernameInput,
      password: passwordInput
    });
  
};

const SignUpContainer = props => {

  return (
    <div>
      <input id="username" placeholder="username" onChange= { usernameData } required></input>
      <br></br><br></br>
      <input id="password" placeholder="password" onChange= { passwordData }></input>
      <br></br><br></br>
      <button id="loginButton" onClick={() => signUp(usernameInput, passwordInput) }> Sign Up </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);