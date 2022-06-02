import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import from child components...
import Search from '../Search.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import Filter from '../Filter.jsx';
import * as actions from '../../actions/types.jsx';
import { getUserLocation } from '../../actions/userActionCreators.jsx';
import { getRestaurants } from '../../actions/restaurantActionCreator.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

class MainContainer extends Component {
  componentDidMount() {
    let userLat, userLong;
    const coordPromise = new Promise(function (resolve, reject) {
      window.navigator.geolocation.getCurrentPosition(function (position) {
        userLat = position.coords.latitude;
        userLong = position.coords.longitude;
        resolve({ userLat, userLong });
      });
    });

    coordPromise.then((coords) => {
      this.props.getUserLocation(coords.userLat, coords.userLong);
      // this.props.getRestaurants( { location: 10013 });
      this.props.getRestaurants({
        latitude: coords.userLat,
        longitude: coords.userLong,
      });
    });
  }

  render() {
    const filters = [];
    const categories = this.props.restaurants.categories;

    for (const [key, value] of Object.entries(categories)) {
      filters.push(
        <Filter className='filter' key={key} category={key} checked={value} />
      );
    }

    return (
      <div className='MainContainer'>
        {/* Longitude: {this.props.users.longitude} */}
        <div></div>
        {/* Latitude: {this.props.users.latitude} */}
        <Search />
        <ul className='filters-container'>{filters}</ul>
        <DisplayContainer />
      </div>
    );
  }
}

// function MainContainer(props) {
//   const [user, setUser] = useState();
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     let userLat, userLong;
//     const coordPromise = new Promise(function (resolve, reject) {
//       window.navigator.geolocation.getCurrentPosition(function (position) {
//         userLat = position.coords.latitude;
//         userLong = position.coords.longitude;
//         resolve({ userLat, userLong });
//       });
//     });

//     coordPromise.then((coords) => {
//       getUserLocation(coords.userLat, coords.userLong);
//       // this.props.getRestaurants( { location: 10013 });
//       getRestaurants({
//         latitude: coords.userLat,
//         longitude: coords.userLong,
//       });
//     });

//     axios.get('/getGUser', { withCredentials: true }).then((response) => {
//       console.log(response);
//       if (response.data) setUser(response.data);
//     });
//   }, []);

//   const filters = [];
//   // const categories = restaurants.categories;

//   // for (const [key, value] of Object.entries(categories)) {
//   //   filters.push(
//   //     <Filter className='filter' key={key} category={key} checked={value} />
//   //   );
//   // }

//   console.log(user);
//   return (
//     <div className='MainContainer'>
//       {/* Longitude: {this.props.users.longitude} */}
//       <div></div>
//       {/* Latitude: {this.props.users.latitude} */}
//       <Search />
//       <ul className='filters-container'>{filters}</ul>
//       <DisplayContainer />
//     </div>
//   );
// }

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getRestaurants, getUserLocation })(
  MainContainer
);
