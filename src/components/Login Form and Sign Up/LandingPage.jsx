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
            <div className="min-h-[90vh] bg-gray-100">
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div class="lg:flex-grow md:w-1/2 pl-5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p class="mb-8 font-serif text-8xl font-bold text-green-600">
                      Good Medicine for Good Health
                    </p>
                    <h1 class="text-lg mb-4 ml-2 text-2xl font-medium text-green-700">
                      Medicines for everyone, delivered to your doorstep.
                    </h1>
                    <div class="flex w-full md:justify-start justify-center items-end">
                      <br />
                      <br />
                      <br />
                      <br />
                      <NavLink
                        to="/login"
                        className="shadow-xl inline-flex transition ease-in font-semibold text-2xl text-white bg-green-600 border-0 py-3 px-6 focus:outline-none hover:bg-orange-600 rounded-md"
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
          <div className="">
            <section class="min-h-[90vh] text-gray-600 bg-green-400 body-font">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img
                    class="object-cover object-center shadow-xl rounded-xl h-[40vh] w-[40vw]"
                    alt="hero"
                    src="https://cdn.dribbble.com/users/1450874/screenshots/14691183/media/f6e87b3caa3bc8ce90dbfb7af515fad6.jpg?compress=1&resize=400x300&vertical=top"
                  />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 class="title-font text-6xl mb-4 font-medium text-orange-500">
                    About Us
                  </h1>
                  <p class="mb-8 text-2xl text-white leading-relaxed">
                    India's Pharmaceutical industry loses around Rs. 5 billion
                    annually on account of destruction of expired drugs, hitting
                    the bottom line of drug manufacturers. MediCare aims to
                    combat this problem by creating a market for unused
                    medicines.
                  </p>
                  <div class="flex justify-center">
                    <button class="shadow-xl ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:text-white font-semibold rounded text-lg duration-500">
                      - Learn More -
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="flex flex-row p-2.5 bg-green-100 min-h-[80vh]">
            <div className="mt-[20vh] border-green-100 bg-white box-border h-[50vh] w-[25vw] p-4 border-8 rounded-3xl hover:bg-green-200 duration-500">
              <div className="text-6xl text-green-600 font-bold">10 years</div>
              <br />
              <br />
              <div className="p-5 text-4xl text-gray-600 font-semibold">
                <p>of serving your medical needs and helping out NGOs.</p>
              </div>
            </div>
            <div className="mt-[20vh] border-green-100 bg-white box-border h-[50vh] w-[25vw] p-4 border-8 rounded-3xl hover:bg-green-200 duration-500">
              <div className="text-6xl text-green-600 font-bold">
                10,000+ reviews
              </div>
              <div className="p-5 text-4xl text-gray-600 font-semibold">
                <p>by satisfied customers and volunteers.</p>
              </div>
            </div>
            <div className="mt-[20vh] border-green-100 bg-white box-border h-[50vh] w-[25vw] p-4 border-8 rounded-3xl hover:bg-green-200 duration-500">
              <div className="text-6xl text-green-600 font-bold">Hundreds</div>
              <br />
              <br />
              <div className="p-5 text-4xl text-gray-600 font-semibold">
                <p>of verified recommendations by doctors.</p>
              </div>
            </div>
            <div className="mt-[20vh] border-green-100 bg-white box-border h-[50vh] w-[25vw] p-4 border-8 rounded-3xl hover:bg-green-200 duration-500">
              <div className="text-6xl text-green-600 font-bold">12</div>
              <br /> <br />
              <div className="p-5 text-4xl text-gray-600 font-semibold">
                <p>awards given to the website for efficient design.</p>
              </div>
            </div>
          </section>
          <section>
            <h1 class="title-font sm:text-8xl text-center text-8xl mb-4 font-medium text-green-600">
              How it Works:
            </h1>
          </section>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
