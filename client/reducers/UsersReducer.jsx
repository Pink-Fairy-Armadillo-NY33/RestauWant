import * as types from '../actions/types.jsx';

// initial state where the default longitude & latitude = san francisco longitude and latitude
// case for the action: GET_USER_LOCATION -> updates the state to the action.payload longitude and latitude

const initialState = {
  longitude: 0,
  latitude: 0,
  isLoggedIn: false,
  username: '',
  profilePicture: '',
};

const UsersReducer = (state = initialState, action) => {

  // console.log('username in reducer', action.payload);
  console.log('username in reducer', action);

  switch(action.type) {

    case types.GET_USER_LOCATION:
      return {
        ...state,
        longitude: action.payload.longitude,
        latitude: action.payload.latitude,
      };
    case types.CHECK_USER_LOGIN:
      console.log('check user login', action);
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        username: action.payload.username,
        profilePicture: action.payload.profilePicture,
      };

    default:
      return state;
  }
};

export default UsersReducer;