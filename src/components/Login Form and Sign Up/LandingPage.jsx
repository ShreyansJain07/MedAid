import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div>
        <div>LandingPage</div>
        <NavLink className="bg-red-600 block text-white p-2 m-5" to="/login">
          Go to Login Page
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
