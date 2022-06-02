import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainContainer from './components/containers/MainContainer.jsx';
import SignUp from './components/pages/SignInPage.jsx';
import LogIn from './components/pages/LogInPage.jsx';
import React from 'react';
import Header from './components/layout/Header.jsx';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
