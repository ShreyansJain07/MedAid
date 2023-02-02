import React from "react";

const VolunteerDashboard = () => {
  return (
    <div>
      VolunteerDashboard
      {/* // 
      available deliveries
      completed delivery
      */}
      <div>
        <div></div>
      </div>
      {/* // Chat gpt one */}
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white">
          <nav className="flex items-center justify-between px-6 py-4">
            <div className="text-xl font-bold text-gray-900">
              Admin Dashboard
            </div>
            <div className="flex">
              <a
                href="#"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
              >
                Logout
              </a>
            </div>
          </nav>
        </header>
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Total Orders
                </h2>
                <p className="text-4xl font-bold text-indigo-500 mt-4">500</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Total Revenue
                </h2>
                <p className="text-4xl font-bold text-indigo-500 mt-4">
                  $15,000
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Average Order Value
                </h2>
                <p className="text-4xl font-bold text-indigo-500 mt-4">$30</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
