import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/containers/MainContainer.jsx';
import Header from './components/layout/Header.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from '../client/store.jsx';
import { Provider } from 'react-redux';
import './style.css';

ReactDOM.render(
  <div className="App">
    <Provider store={store}>
      <Header />
      <Router>
        <MainContainer />
      </Router>
    
    </Provider>
  </div>,
  document.querySelector('#root')
);


