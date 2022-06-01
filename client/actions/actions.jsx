import * as types from './types.jsx';
import axios from 'axios';

export const checkUserLogin = isLoggedIn => ({
  type: types.CHECK_USER_LOGIN,
  payload: isLoggedIn
});

export const checkLoginInfo = (isLoggedIn) => {
  return true;
};