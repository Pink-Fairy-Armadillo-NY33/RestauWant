import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import Search from '../components/Search.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import Filter from '../components/Filter.jsx';
import * as actions from '../actions/types.jsx';
import { getUserLocation} from '../actions/userActionCreators.jsx';
import { getRestaurants } from '../actions/restaurantActionCreator.jsx';




class MainContainer extends Component {

  componentDidMount() {
    let userLat, userLong;
    const coordPromise = new Promise(function(resolve, reject) {

      window.navigator.geolocation.getCurrentPosition( function (position) {
        userLat = position.coords.latitude;
        userLong = position.coords.longitude;
        resolve({userLat, userLong});
      });

    });

    coordPromise.then( coords => {
      this.props.getUserLocation(coords.userLat, coords.userLong);
      this.props.getRestaurants({ latitude: coords.userLat, longitude: coords.userLong});
    });

  }

  render() {
    return (
      <div> 
        Longitude: {this.props.users.longitude}
        Latitude: {this.props.users.latitude}
        <Search />
        <Filter />
        <DisplayContainer />
      </div>
    ); 
  }
}

function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps, { getRestaurants, getUserLocation })(MainContainer);