import React from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions.jsx'
import { Link, Outlet } from 'react-router-dom';

import SearchContainer from '../components/Search.jsx';
import RestaurantDisplay from '../components/RestaurantDisplay.jsx';


const mapStateToProps = state => ({
  latitude: state.users.latitude,
  longitude: state.users.longitude,
  isLoggedIn: state.users.isLoggedIn,
  username: state.users.username,
  profilePicture: state.users.profilePicture,
});

const MainContainer = props => {

  const { latitude, longitude, isLoggedIn, username, profilePicture } = props;
  
  // console.log('https://cdn.discordapp.com/attachments/954781919302803534/980684613007585310/option-1.png');
  const profPicAlt = 'https://cdn.discordapp.com/attachments/954781919302803534/980684613007585310/option-1.png';
  const profPic = `${profPicAlt}`;

  return (
    <div className = "MainContainer">
      { isLoggedIn ? <img id="profilePicture" alt={profPicAlt} src={profPic}/> : ''}
      { isLoggedIn ? <p>Welcome back, {username} </p> : <Link id="login" to="/api/login"> Login </Link> }
      <br></br>
      { isLoggedIn ? '' : <Link id="sign up" to="/api/signup"> Sign Up </Link> }
      {/* <br></br>
      Longitude: {longitude} 
      <div></div>
      Latitude: {latitude} */}
      <SearchContainer />
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      </ul>
      <RestaurantDisplay />
      <Outlet/>
    </div>
  ); 
};

export default connect(mapStateToProps, null)(MainContainer);