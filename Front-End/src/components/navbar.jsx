import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import "../index.css";
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="items-left ml-0.8"><img src={logo} alt="logo.png" style={{height:'200px', width:"200px"}}/></div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 justify-end">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                  ${isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/login"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                  ${isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                Login 
              </NavLink>
              <NavLink 
                to="/signup"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                  ${isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                Sign-up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;