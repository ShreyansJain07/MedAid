import React from "react";

const Donate = () => {
  return (
    <div>
      <div className="min-h-screen p-3">
        <div className="flex flex-row">
          <div>
            <div className="w-1/2 p-4 text-8xl font-semibold">
              Ready to donate?
              <br /><br />
            </div>
            <div className="leading-loose text-2xl">
              <div className="text-left font-sans font-lg text-3xl">Donated medicine must meet ALL of these criteria:</div>
              <br />
              <div className="flex flex-row">
                <input className="w-fit mx-3" type="checkbox" name="" id="" />
                <div className="w-fit">Is not a controlled Substance (No narcotics or opioids)</div>
              </div>
              <div className="flex flex-row">
                <input className="w-fit mx-3" type="checkbox" name="" id="" />
                <div className="w-fit">Will not expire for atleast 5 months</div>
              </div>
              <div className="flex flex-row">
                <input className="w-fit mx-3" type="checkbox" name="" id="" />
                <div className="w-fit">Is in sealed packaging (Standard amber vials not eligible)</div>
              </div>
              <div className="flex flex-row">
                <input className="w-fit mx-3" type="checkbox" name="" id="" />
                <div className="w-fit">Does not require refrigeration</div>
              </div>
              <div className="flex flex-row">
                <input className="w-fit mx-3" type="checkbox" name="" id="" />
                <div className="w-fit">Understand that there is a shipping charge</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <img src="http://sirum.org/wp-content/uploads/2022/07/globe-hand.png" className="h-auto" alt="..." />
          </div>
        </div>

        <div>
          <div className="text-left p-2.5 text-2xl">My Name</div>
          <div className="flex flex-row">
            <input type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[50vw] h-[7vh] p-2.5" placeholder="First" />
            <input type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[50vw] h-[7vh] p-2.5" placeholder="Last" />
          </div>
          <div className="text-left p-2.5 text-2xl">My Email</div>
          <input type="email" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[97.7vw] h-[7vh] p-2.5" placeholder="Enter email here" />
          <div className="text-left p-2.5 text-2xl">My Address</div>
          <input type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[97.7vw] h-[7vh] p-2.5" placeholder="Address Line 1" />
          <input type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[97.7vw] h-[7vh] p-2.5" placeholder="Address Line 2" />
          <div className="flex flex-row">
            <input type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[33vw] h-[7vh] p-2.5" placeholder="City" />
            <input type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[33vw] h-[7vh] p-2.5" placeholder="State" />
            <input type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[33vw] h-[7vh] p-2.5" placeholder="Zipcode" />
          </div>
        </div>
        <br /><br />
        <div className="bg-gray-300 p-3">
          <div className="font-bold text-4xl">List of Donated Medicine</div>
          <div>Item</div>
          <div className="p-2.5 flex flex-row">
            <div>
              <div>National Drug Code (NDC)</div>
              <input type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="" />
            </div>
            <div>
              <div>Formatted NDC</div>
              <input type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="" />
            </div>
            <div>
              <div>Drug Name and Strength</div>
              <input type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="" />
            </div>
          </div>
          <div className="p-2.5 flex flex-row">
            <div>
              <div>Expiration Date</div>
              <input type="date" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="" />
            </div>
            <div>
              <div>Qty Type</div>
              <input type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="Name" />
            </div>
            <div>
              <div>Qty</div>
              <input type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="Name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
