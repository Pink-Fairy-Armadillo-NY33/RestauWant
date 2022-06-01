import React, { Component,Link } from 'react';
import { connect } from 'react-redux';
// import from child components...

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  // add action creators
});


class Header extends Component {

  render() {
    return (
      <div className="Header">
        <a className="logo" href="/">RestauWant</a>
        <div className='btn-group'>
          <button className="login-btn btn">Log In</button>
          <button className="signup-btn btn">Sign Up</button>
        </div>
      </div>
    ); 
  }
}

export default Header;