import { legacy_createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.jsx';
import reduxThunk from 'redux-thunk';

const store = legacy_createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);
 
export default store;
