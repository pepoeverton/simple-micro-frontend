import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "./components/Profile";

export default function Navbar() {
  const [showMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setToggleMobileMenu(!showMobileMenu)}
            >
              M
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="px-1 font-medium text-white text-2xl">Logo</div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <NavLink
                  to="/"
                  exact
                  activeClassName="bg-gray-900"
                  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white focus:outline-none hover:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/projects"
                  exact
                  activeClassName="bg-gray-900"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white transition duration-150 ease-in-out"
                >
                  Projects
                </NavLink>
              </div>
            </div>
          </div>
          <Profile />
        </div>
      </div>
      {showMobileMenu ? (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3">
            <NavLink
              to="/"
              exact
              activeClassName="bg-gray-900"
              onClick={() => setToggleMobileMenu(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none focus:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/projects"
              exact
              activeClassName="bg-gray-900"
              onClick={() => setToggleMobileMenu(false)}
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white transition duration-150 ease-in-out"
            >
              Projects
            </NavLink>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
