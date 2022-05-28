import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.jsx';
import reduxThunk from 'redux-thunk';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);
export default store;
