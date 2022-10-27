import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthVerify from './helpers/AuthVerify';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <AuthVerify logOut={() => {
        localStorage.clear();
      }}
      />
    </BrowserRouter>
  );
}

export default App;
