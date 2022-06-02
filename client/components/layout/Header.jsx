import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import from child components...

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({
//   // add action creators
// });

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <a className='logo' href='/'>
          RestauWant
        </a>
        <div className='btn-group'>
          <Link className="login-btn btn" to='/login'>
            Log In
          </Link>
          <Link className="signup-btn btn" to='/signup'>
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
