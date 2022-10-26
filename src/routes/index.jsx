import React, { useEffect } from 'react';
import { useRoutes, useNavigate, useLocation } from 'react-router-dom';

import { Layout } from '../components';
import {
  Home,
  Login,
  House,
  Pickup,
  InternalServerError,
  NotFound,
} from '../pages';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <RequireAuth redirectTo="/login"><Home />,</RequireAuth>
        },
        {
          path: '/login',
          element: <AlreadyAuth redirectTo="/"><Login /></AlreadyAuth>,
        },
        {
          path: '/pickup',
          element: <RequireAuth redirectTo="/"><Pickup /></RequireAuth>,
        },
        {
          path: '/house/:houseID',
          element: <RequireAuth redirectTo="/login"><House />,</RequireAuth>
        },
        {
          path: '/server-error',
          element: <InternalServerError />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return routes;
};

const AlreadyAuth = ({ redirectTo, children }) => {
  const navigate = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    const user = localStorage.getItem('admin');
    if (user) {
      navigate(redirectTo, { replace: true, state: { from: loc.pathname } });
    }
  }, []);

  return children;
};

const RequireAuth = ({ redirectTo, children }) => {
  const navigate = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    const user = localStorage.getItem('admin');
    if (!user) {
      navigate(redirectTo, { replace: true, state: { from: loc.pathname } });
    }
  }, []);

  return children;
};

export default Routes;
