
import React, { useState } from 'react';
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer.jsx';
import Sidebar from './components/Layout/Sidebar.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {isSidebarOpen && <Sidebar />}
      <div className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-0' : 'ml-64'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
