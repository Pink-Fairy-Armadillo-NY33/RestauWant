import React from 'react';
import ReactDOM from 'react-dom';
// import MainContainer from './components/containers/MainContainer.jsx';
import App from './components/App.jsx';
import Header from './components/layout/Header.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store.jsx';
import { Provider } from 'react-redux';
import './style.css';

ReactDOM.render(
  <div className='App'>
    <Provider store={store}>
      <Header />
      <Router>
        <App />
      </Router>
    </Provider>
  </div>,
  document.querySelector('#root')
);
