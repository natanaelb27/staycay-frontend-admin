import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import AuthVerify from './helpers/AuthVerify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes />
      <AuthVerify logOut={() => {
        localStorage.clear();
      }}
      />
    </BrowserRouter>
  );
}

export default App;
