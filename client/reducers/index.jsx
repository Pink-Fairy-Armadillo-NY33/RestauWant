import { combineReducers } from 'redux'; //import reducer functions
import RestaurantsReducer from './RestaurantsReducer.jsx'; 
import UsersReducer from './UsersReducer.jsx'; 

 const reducers = combineReducers({
   restaurants: RestaurantsReducer,
   users: UsersReducer
});

export default reducers;