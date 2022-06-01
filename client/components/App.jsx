import { Routes, Route, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import SignUp from './pages/SignInPage.jsx';
import LogIn from './pages/LogInPage.jsx';
import React from 'react';

function MainRouter() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='LogIn' element={<LogIn />} />
        <Route path='SignUp' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
