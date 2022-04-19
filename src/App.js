import React from "react";
import { IconStyle } from "./assets/iconfont/iconfont";
import routes from "./routes/index.js";
import { HashRouter, useRoutes } from "react-router-dom";
import { GlobalStyle } from "./style";

const Page = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Page />
    </HashRouter>
  );
}

export default App;
