import * as types from '../actions/types';


const initialState = {
  username: 'Pink Fairy Armadillo',
    // Buenos Aires
  homeLocation: {coordinates: {
    latitude: 34.6037,
    longitude: 58.3816
    }},
  // Defaults to homeLocation
  searchLocation: {coordinates: {
      latitute: 34.6037,
      longitude: 34.6037
  }},
  restaurantsToBeServed: [],
  cuisinePreference: '',
  // loggedIn: 'true'
}

const RestaurantsReducer = (state = initialState, action) => {
  let restaurantList;
  switch (action.type) {
    case types.GET_RESTAURANT:
      
      break;
  
    default:
      break;
  }


};



// export default restaurantReducer;