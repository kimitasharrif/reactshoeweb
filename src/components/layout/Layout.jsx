import React from 'react';
import TopBar from '../topbar/TopBar';
import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

const Layout = () => {
  return (
    <div>
      
      <TopBar />
      <NavBar />
      
    </div>
  );
};

export default Layout;
