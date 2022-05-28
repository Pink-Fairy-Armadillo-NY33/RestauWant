import * as types from './types.jsx';


// Get all restaurants from the database
// GET http://localhost:8080/api/restaurant/

export const getAllRestaurants = () => {

  function actionCreator(dispatch) {

    fetch('/api/restaurant')
      .then( res => res.json())
      .then( data => {
        dispatch({
          type: types.GET_ALL_RESTAURANTS,
          payload: data,
        });
      });
  }

  return actionCreator;
};

// Get a specific restaurant from the database
// GET http://localhost:8080/api/restaurant/"name"
export const getRestaurantByName = (name) => {

  function  actionCreator (dispatch) {
    fetch(`'/api/restaurant/${name}'`);
  }

 

};

// behind the scenes
/*
call getRestaurantByName
expects the call to return a function
get the returnedFunction & pass in a dispatch function

returnedFunction(dispatch)

dispatch function expects an object (aka our action)
object = {
  type:
  payload (option):
}

*/

/*
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
*/