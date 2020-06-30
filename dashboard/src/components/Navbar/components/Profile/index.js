import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const menuRef = useRef(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowProfileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
    >
      <div className="ml-3 relative">
        <div>
          <button
            className="flex text-sm border-2 border-transparent focus:outline-none focus:border-white transition duration-150 ease-in-out"
            id="user-menu"
            aria-label="User menu"
            aria-haspopup="true"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://avatars2.githubusercontent.com/u/7150696?s=460&u=c3193bc171f95187ada1dc2eda555ff866dc7821&v=4"
              alt="Profile image"
            />
          </button>
        </div>
        {showProfileMenu ? (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
            <div
              className="py-1 rounded-md bg-white shadow-xs"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <Link
                to="/profile"
                onClick={() => setShowProfileMenu(false)}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Profile
              </Link>
              <Link
                to="#"
                onClick={() => setShowProfileMenu(false)}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Sign out
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
