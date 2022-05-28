import * as types from './types';



/*
// Get all restaurants from the database
// GET http://localhost:8080/restaurant/

// Get a specific restaurant from the database
// GET http://localhost:8080/restaurant/"name"
*/



// sets state of restaurant location
export const setNewLocationActionCreator = restaurantLocation => {
    return ({
      type: types.SET_NEW_LOCATION,
      payload: restaurantLocation,
    });
  };

  // sets state of restaurant name
export const setNewRestNameActionCreator = restaurantName => {
    return ({
      type: types.SET_NEW_RESTNAME,
      payload: restaurantName,
    });
  };

  // sets state of  restaurant stars
export const setNewRestStarsCreator = restaurantStars => {
    return ({
      type: types.SET_STARS,
      payload: restaurantStars,
    });
  };



// add restaurant
export const addRestActionCreator = restaurantId => ({
    type: types.ADD_REST,
    payload: restaurantId,
  });
  
  
  // delete restaurant
  export const deleteRestActionCreator = restaurantId =>({
    type: types.DELETE_REST,
    payload: restaurantId,
  });
  