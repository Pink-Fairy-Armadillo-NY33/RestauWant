import * as types from './types.jsx';


// Get all restaurants from the database
// GET http://localhost:8080/api/restaurant/
/*
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
*/
// Get a specific restaurant from the database
// http://localhost:8080/restaurant/search?term=delis&latitude=37.786882&longitude=-122.399972
// const term = req.query.term --> delis
// const latitude = req.query.latitude --> 37.786882
// const longitude = req.query.longitude --> -122.399972
/*
  params = {
    term: 'delis'
    latitude: 12
    longitude: 10
  }
  params = {
    latitude: 12
    longitude: 10
  }
*/
export const getRestaurants = (params) => {
  console.log(params, 'this is params');

  const  arr = [];

  for (const key in params){
    arr.push(`${key}=${params[key]}`);
  }

  const searchTerms = arr.join('&');

  function actionCreator (dispatch) {
    fetch(`/api/restaurant/search?${searchTerms}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({
          type: types.GET_RESTAURANTS,
          payload: data,
        });
      });
  }
  return actionCreator;
};

export const setCategories = (filters) => {

  function actionCreator(dispatch) {
    dispatch({
      type: types.SET_CATEGORIES,
      payload: filters,
    });
  }

  return actionCreator;
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