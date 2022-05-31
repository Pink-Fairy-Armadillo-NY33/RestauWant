import * as types from '../actions/types.jsx';

// initial state where the default longitude & latitude = san francisco longitude and latitude
// case for the action: GET_USER_LOCATION -> updates the state to the action.payload longitude and latitude

const initialState = {
  longitude: -122.399972,
  latitude: 37.786882,
};

const UsersReducer = (state = initialState, action) => {

  switch(action.type) {
    case types.GET_USER_LOCATION:
      return {
        ...state,
        longitude: action.payload.longitude,
        latitude: action.payload.latitude,
      };

    default:
      return state;
  }
};

export default UsersReducer;