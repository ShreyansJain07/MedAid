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
          <div>
            <div className="min-h-screen">
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div class="lg:flex-grow md:w-1/2 pl-5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="text-lg mb-4 ml-2 font-medium text-blue-800">
                      We Provide All Health Care Solution
                    </h1>
                    <p class="mb-8 text-4xl font-bold text-blue-600">
                      Protect Your Health And Take Care To Of Your Health
                    </p>
                    <div class="flex w-full md:justify-start justify-center items-end">
                      <button class="inline-flex ml-2 font-semibold text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-md">
                        Get Started
                      </button>
                    </div>
                  </div>
                  <div class="lg:max-w-lg pr-5 lg:w-full md:w-1/2 w-5/6">
                    <img
                      class="object-cover object-center rounded"
                      alt="hero"
                      src="https://dummyimage.com/720x600"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
