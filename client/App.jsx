import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import SignUpContainer from './containers/SignUpContainer.jsx';
// import { HashRouter, Route, Routes } from 'react-router-dom'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import store from '../client/store.jsx';
import { Provider } from 'react-redux';
import './style.css';


ReactDOM.render(
  <div className="App">
    <h1>WestauWant</h1>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainContainer/>}/>
          <Route path='/api/login' element={<LoginContainer/>}/>
          <Route path='/api/signup' element={<SignUpContainer/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>,
  document.querySelector('#root')
);


