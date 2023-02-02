import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="sticky top-0 z-20 bg-white">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/userprofile"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img className="w-[120px]" src={logo} alt="" />
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/userprofile"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Profile
            </NavLink>
            <NavLink
              to="/donate"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Donate
            </NavLink>
            <NavLink
              to="/volunteer"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Volunteer
            </NavLink>
            <NavLink
              to="/home"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Community
            </NavLink>
            <NavLink
              to="/contact"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Contact Us
            </NavLink>
          </nav>
          <NavLink
            // to="/contact"
            to="/login"
            className="inline-flex transition ease-in items-center text-white bg-green-600 border-0 py-1 pl-3 pr-2 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0"
          >
            Login
            {/* <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 p-1 ml-2 bg-white rounded-sm stroke-green-600"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> */}
          </NavLink>
          {/* <NavLink
            to="/login"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </NavLink> */}
          <NavLink
            to="/"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </NavLink>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Header;
