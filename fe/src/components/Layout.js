// src/components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className='flex h-screen bg-base-200'>
      <Sidebar></Sidebar>
    
      <div class="p-4 sm:ml-64">
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
