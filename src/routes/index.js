import React from 'react';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import Album from '../application/Album';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Navigate to="/recommend" />,
      },
      {
        path: '/recommend',
        element: <Recommend />,
        children: [{ path: '/recommend/:id', element: <Album /> }],
      },
      {
        path: '/singers',
        element: <Singers />,
      },
      {
        path: '/rank',
        element: <Rank />,
      },
    ],
  },
];

export default routes;
