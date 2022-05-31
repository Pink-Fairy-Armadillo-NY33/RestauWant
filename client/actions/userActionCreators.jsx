import * as types from './types.jsx';
/*


// Get all users from the database
// GET http://localhost:8080/user/

// Get a specific user from the database
// GET http://localhost:8080/user/"name"

*/
/*
GET_USER_LOCATION
take in two parameters, longitude latitude
type: GET_USER_LOCATION
payload - object of the two parameters as key value pairs
*/

export const getUserLocation = (longitude, latitude) => {
  function actionCreator(dispatch) {      
    dispatch({
      type: types.GET_USER_LOCATION,
      payload: {
        longitude: longitude,
        latitude: latitude
      }
    });
  }
  return actionCreator;
};

