import React from "react";

const CommunityTest = () => {
  return (
    <div>
      <div className="bg-gray-200 min-h-screen">
        <header className="bg-white p-6">
          <h1 className="text-5xl font-bold">Community</h1>
        </header>
        <main className="p-6">
          <p className="text-gray-700 text-2xl">Welcome to our community!</p>
        </main>
        <div>
          <section className="bg-white p-6">
            <h2 className="text-lg font-medium mb-4">Community Members</h2>
            <ul className="grid grid-cols-3 gap-4">
              <li className="bg-gray-200 p-4 rounded-lg">
                <img
                  src="path/to/image"
                  alt="member 1"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-lg font-medium mt-2">Member 1</h3>
              </li>
              <li className="bg-gray-200 p-4 rounded-lg">
                <img
                  src="path/to/image"
                  alt="member 2"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-lg font-medium mt-2">Member 2</h3>
              </li>
              <li className="bg-gray-200 p-4 rounded-lg">
                <img
                  src="path/to/image"
                  alt="member 3"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-lg font-medium mt-2">Member 3</h3>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommunityTest;
