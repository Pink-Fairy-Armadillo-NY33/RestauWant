import * as types from './types.jsx';
import axios from 'axios';

export const restaurantActionCreator = restaurantData => ({
  type: types.GET_RESTAURANT_DATA,
  payload: restaurantData,
});

export const checkUserLogin = (isLoggedIn, username, profilePicture) => ({
  type: types.CHECK_USER_LOGIN,
  payload: {isLoggedIn: isLoggedIn, username: username, profilePicture: profilePicture}
});

export const checkLoginInfo = isLoggedIn => {
  return true;
};

export const setCategories = (name, checked) => ({
  type: types.SET_CATEGORIES,
  payload: {name: name, checked: checked}
});

export const getRestaurants = async params => {
  params = {location: `${params}`};
  console.log(params, 'this is params');

  const  arr = [];

  for (const key in params){
    arr.push(`${key}=${params[key]}`);
  }
  console.log('this is arr', arr);

  const searchTerms = arr.join('&');
  console.log('this is searchterms', searchTerms);

  const data = await axios.get(`/api/restaurant/search?${searchTerms}`);
  console.log('this is data', data.data);
  return data.data;
};

export const getUserLocation = (longitude, latitude) => {

};

export const checkLogin = async (usernameInput, passwordInput) => {
  const data = await axios.post('/api/user/login', 
    {
      username: usernameInput,
      password: passwordInput
    });
  console.log('data in loginContainer:', data);
  return {data: data.data, username: data.username, profilePicture: data.profilePicture};
};