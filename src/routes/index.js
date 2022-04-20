//routes/index.js
import React from 'react';

import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
// import Test from '../application/Test';

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        path: 'recommend',
        element: <Recommend />,
      },
      {
        path: 'singers',
        element: <Singers />,
      },
      {
        path: 'rank',
        element: <Rank />,
      },
      // {
      //   path: 'test',
      //   element: <Test />,
      // },
    ],
  },
];

export default routes;
