import React from "react";

const Volunteer = () => {
  return (
    <div>
      {/* <div className="bg-gray-300 p-10">
        <div className="bg-gray-100 p-2 rounded-xl">
          <div className="text-2xl font-semibold">Details of volunteer</div>
          <div>Information about volunteer</div>
          <div className="bg-white p-3">
            <div className="flex flex-row">
              <input type="text" className="border" />
              <input type="text" className="border" />
            </div>
            <div className="flex flex-row">
              <input type="text" className="border" />
              <input type="text" className="border" />
            </div>
          </div>
        </div>
      </div> */}
      {/* // Chat gpt one  */}
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Volunteer Details</h1>
        <div className="bg-white p-4 shadow-md">
          <form>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full border border-gray-400 p-2"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-400 p-2"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full border border-gray-400 p-2"
                type="text"
                id="phone"
                name="phone"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="skills">
                Skills
              </label>
              <textarea
                className="w-full border border-gray-400 p-2"
                id="skills"
                name="skills"
                rows="4"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
