import React, { useEffect } from "react";
import axios from "axios";
const Contact = () => {
  return (
    <div>
      <section class="px-[20vw] bg-green-400 text-gray-600 body-font relative">
      <h1 class="p-5 title-font text-6xl mb-4 font-medium text-white">
                    Get in Touch!
                  </h1>
        <div class="text-left container px-5 py-24 mx-auto flex">
          <div class="shadow-2xl p-5 border rounded-3xl bg-white flex flex-col w-[60vw]">
            <h2 class="text-center text-4xl text-gray-900 mb-1 font-medium">
              Contact Us
            </h2>
            <div className="flex flex-row p-2.5">
            <div className="p-5">
            <div class="relative mb-4">
              <label for="name" className="text-xl text-gray-600">
                Name
              </label><br/>
              <input
                type="text"
                id="name"
                name="name"
                class="w-[30vw] bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="John Doe"
              />
            </div>
            <br/>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-xl text-gray-600">
                Email
              </label><br/>
              <input
                type="email"
                id="email"
                name="email"
                class="w-[30vw] bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="johndoe@example.com"
              />
            </div>
            
            <div class="relative mb-4">
              <br/>
              <label for="email" class="leading-7 text-xl text-gray-600">
                Phone Number
              </label><br/>
              <input
                type="tel"
                id="email"
                name="email"
                class="w-[30vw] bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="9999888770"
              />
            </div>
            <p class="text-s text-gray-500 mt-3">
            <input
                  className="my-auto w-5 h-5 mx-3"
                  type="checkbox"
                  name=""
                  id=""
                />
              Recieve newsletters and reular updates from our website
            </p>
            </div>
            <div class="relative mb-4">
              <textarea
                id="message"
                name="message"
                class="mt-5 w-full bg-gray-200 outline-none rounded h-[40vh] w-[20vw] focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            </div>
            
            
            
            
            <button class="ml-80 text-white w-1/3 font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
              Submit
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;