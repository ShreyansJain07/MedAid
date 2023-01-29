import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  return (
    <div>
      {loading && (
        <div className="min-h-screen w-[100vw] pt-[30vh] bg-blac">
          <PacmanLoader
            loading={true}
            color="red"
            size={70}
            className="mx-[42vw] inline-block"
          />
          <div className="text-red-600 text-4xl font-semibold mt-20">
            Loading ...
          </div>
        </div>
      )}
      {!loading && (
        <div>
          <div>LandingPage</div>
          <NavLink className="bg-red-600 block text-white p-2 m-5" to="/login">
            Go to Login Page
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
