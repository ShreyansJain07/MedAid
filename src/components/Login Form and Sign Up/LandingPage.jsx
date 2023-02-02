import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 300);
  }, []);

  return (
    <div>
      {/* {loading && (
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
      )} */}
      {!loading && (
        <div>
          {/* <NavLink className="bg-red-600 block text-white p-2 m-5" to="/login">
            Go to Login Page
          </NavLink> */}
          <div>
            <div className="min-h-screen bg-[url('https://meditro.themetrades.com/react/static/media/bg1.c53c8971.jpg')]">
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div class="lg:flex-grow md:w-1/2 pl-5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="text-lg mb-4 ml-2 font-medium text-green-700">
                      We Provide All Health Care Solution
                    </h1>
                    <p class="mb-8 text-[45px] font-bold text-green-600">
                      Protect Your Health And Take Care To Of Your Health
                    </p>
                    <div class="flex w-full md:justify-start justify-center items-end">
                      <NavLink
                        to="/login"
                        className="inline-flex transition ease-in ml-2 font-semibold text-white bg-orange-500 border-0 py-3 px-6 focus:outline-none hover:bg-orange-600 rounded text-sm"
                      >
                        Get Started
                      </NavLink>
                    </div>
                  </div>
                  <div class="lg:max-w-lg pr-5 lg:w-full md:w-1/2 w-5/6">
                    <img
                      class="drop-shadow-2xl object-cover object-center rounded"
                      alt="hero"
                      src="http://clipart-library.com/images_k/doctor-transparent-background/doctor-transparent-background-5.png"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* // About us */}
          <div>
            <section class="text-gray-600 bg-[url('https://meditro.themetrades.com/react/static/media/bg1.c53c8971.jpg')] body-font">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img
                    class="object-cover object-center rounded"
                    alt="hero"
                    src="https://dummyimage.com/720x600"
                  />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <div className="text-orange-600 font-bold">About Us</div>
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-600">
                    Medicine centre
                  </h1>
                  <p class="mb-8 leading-relaxed">
                    India's Pharmaceutical industry loses around Rs. 5 billion
                    annually on account of destruction of expired drugs, hitting
                    the bottom line of drug manufacturers. MediCare aims to
                    combat this problem by creating a market for
                    unused medicines.
                  </p>
                  <div class="flex justify-center">
                    <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                      Button
                    </button>
                    <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
