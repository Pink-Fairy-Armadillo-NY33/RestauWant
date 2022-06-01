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
          <Link to='/LogIn'>
            <button className='login-btn btn'>Log In</button>

            {/* <Link to='/login'>Log IN</Link> */}
          </Link>
          <button className='signup-btn btn'>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Header;
