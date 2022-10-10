import React from 'react';
import { Provider } from 'react-redux';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index.js';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import store from './store/index';
import { GlobalStyle } from './style';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
