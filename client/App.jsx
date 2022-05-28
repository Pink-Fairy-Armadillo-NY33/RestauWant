import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer.jsx';
import Header from './components/Header.jsx';

import store from '../client/store.jsx';
import { Provider } from 'react-redux';


ReactDOM.render(
  <div>
    Something here
    <Provider store={store}>
      <Header />
      <MainContainer />
    </Provider>
  </div>,
  document.querySelector('#root')
);


// do we need to export default App;?