import React from 'react';
import { Provider } from 'react-redux';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index.js';
import { HashRouter, useRoutes } from 'react-router-dom';
import store from './store/index';
import { GlobalStyle } from './style';

const Page = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Page />
      </HashRouter>
    </Provider>
  );
}

export default App;
