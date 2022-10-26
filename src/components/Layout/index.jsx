import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../common/Navbar';
import { Container } from './style';

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default Layout;
