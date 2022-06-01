import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import from child components...

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  // add action creators
});


class SignUpContainer extends Component {

  userSignUp() {
    axios.post('/api/signup', {

    });
  }

  render() {
    return (
      <h1 className="Header">
        Hello
      </h1>
    ); 
  }
}

export default SignUpContainer;