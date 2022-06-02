import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import MainContainer from './components/containers/MainContainer.jsx';
import App from './App.jsx';
// import Header from './components/layout/Header.jsx';
import store from './store.jsx';
import { Provider } from 'react-redux';
import './style.css';

//Before
// ReactDOM.render(
//   <div className='App'>
//     <Provider store={store}>
//       <Header />
//       <App />
//     </Provider>
//   </div>,
//   document.querySelector('#root')
// );

// After
const container = document.getElementById('App');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  // <App />
);
