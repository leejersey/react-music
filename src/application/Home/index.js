import React from 'react';
import { Top, Tab, TabItem } from './style';
import { NavLink, Outlet } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" className="/">
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" className="/">
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" className="/">
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      <Outlet />
    </div>
  );
}

export default React.memo(Home);
