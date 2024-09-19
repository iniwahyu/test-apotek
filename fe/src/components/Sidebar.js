// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="w-64 h-full bg-white fixed p-4">
      <h2 className="text-2xl mb-6">Menu</h2>
      <ul className='menu menu-compact rounded-box text-black p-0'>
        <li className="mb-4">
          <Link to="/" className="text-lg">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/employees" className="text-lg">Employees</Link>
        </li>
        <li className="mb-4">
          <Link to="/categories" className="text-lg">Categories</Link>
        </li>
        <li className="mb-4">
          <Link to="/products" className="text-lg">Products</Link>
        </li>
        <li className="mb-4">
          <Link to="/roles" className="text-lg">Roles</Link>
        </li>
        <li className="mb-4">
          <button
            className="text-lg focus:outline-none"
            onClick={toggleSettings}
          >
            Settings
          </button>
          {isSettingsOpen && (
            <ul className="pl-4 mt-2">
              <li className="mb-2">
                <Link to="/settings/profile" className="text-md hover:underline">Profile Settings</Link>
              </li>
              <li className="mb-2">
                <Link to="/settings/account" className="text-md hover:underline">Account Settings</Link>
              </li>
              <li className="mb-2">
                <Link to="/settings/notifications" className="text-md hover:underline">Notification Settings</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;