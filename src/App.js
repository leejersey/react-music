import React from 'react';
import { Provider } from 'react-redux';
import { IconStyle } from './assets/iconfont/iconfont';
import { Routes, Route } from 'react-router-dom';
import store from './store/index';
import { GlobalStyle } from './style';

import Home from './application/Home/index';
import Recommend from './application/Recommend/index';
import Singers from './application/Singers/index';
import Rank from './application/Rank/index';
import Album from './application/Album/index';
import Singer from './application/Singer/index';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Recommend />} />
          <Route path="recommend" element={<Recommend />}>
            <Route path=":id" element={<Album />}></Route>
          </Route>
          <Route path="singers" element={<Singers />}>
            <Route path=":id" element={<Singer />}></Route>
          </Route>
          <Route path="rank" element={<Rank />}>
            <Route path=":id" element={<Album />}></Route>
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
