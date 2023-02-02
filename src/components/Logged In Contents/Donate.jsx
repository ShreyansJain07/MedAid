import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, useScroll } from "framer-motion";

const Donate = ({med,setMed}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [drugName, setDrugName] = useState("");
  const [exp, setExp] = useState("");
  const [qty, setQty] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [qtySelected, setQtySelectedValue] = useState("");
  const [clicked, setClicked] = useState(false);
  const [checkbox,setCheckbox] = useState(0)

  const handleOptionClick = (value) => {
    setQtySelectedValue(value);
    setIsOpen(false);
  };
  const handleChange = (e) =>{
    setCheckbox(checkbox+1)
  }

  // On scroll
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/medicine?query=${drugName}`)
      // .get(
      //   `https://serpapi.com/search.json?q=dolo+650+details+1mg&location=Maharashtra,+India&hl=hi&gl=in&google_domain=google.co.in&key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2`
      // )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [clicked]);

  useEffect(() => {
    if (name && email && address && city && drugName && exp && qty) {
      console.log(name, email);
      axios.post("http://localhost:5000/donate", {
        name: name,
        email: email,
        address: address,
        city: city,
        drugName: drugName,
        exp: exp,
        qty: qty,
        qtySelected:qtySelected
      });
    }
  }, [clicked]);

  return (
    <div>
      <motion.div
        className="progress-bar sticky z-30 top-0 left-0 right-0 h-[10px] origin-left bg-green-600"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="min-h-screen p-16">
        <div className="flex flex-row">
          <div>
            <div className="text-green-600 p-4 text-8xl font-semibold">
              Ready to donate?
            </div>
            <div className="leading-loose mt-16 text-2xl">
              <div className="text-left font-sans font-lg text-3xl">
                Donated medicine must meet ALL of these criteria:
              </div>
              <br />
              <div className="flex flex-row">
                <input
                  className="my-auto accent-green-600 w-5 h-5 mx-3"
                  type="checkbox"
                  name=""
                  id=""
                  onClick={handleChange}
                />
                <div className="w-fit">
                  Is not a controlled Substance (No narcotics or opioids)
                </div>
              </div>
              <div className="flex flex-row">
                <input
                  className="my-auto accent-green-600 w-5 h-5 mx-3"
                  type="checkbox"
                  name=""
                  id=""
                  onClick={handleChange}
                />
                <div className="w-fit">
                  Will not expire for atleast 5 months
                </div>
              </div>
              <div className="flex flex-row">
                <input
                  className="my-auto accent-green-600 w-5 h-5 mx-3"
                  type="checkbox"
                  name=""
                  id=""
                  onClick={handleChange}
                />
                <div className="w-fit">
                  Is in sealed packaging (Standard amber vials not eligible)
                </div>
              </div>
              <div className="flex flex-row">
                <input
                  className="my-auto accent-green-600 w-5 h-5 mx-3"
                  type="checkbox"
                  name=""
                  id=""
                  onClick={handleChange}
                />
                <div className="w-fit">Does not require refrigeration</div>
              </div>
              <div className="flex flex-row">
                <input
                  className="my-auto accent-green-600 w-5 h-5 mx-3"
                  type="checkbox"
                  name=""
                  id=""
                  onClick={handleChange}
                />
                <div className="w-fit">
                  Understand that there is a shipping charge
                </div>
              </div>
              <div className="w-fit">
                  {checkbox!==5?<span className="text-red-600 font-semibold">Please check all checkboxes</span>:<span className="text-green-600 font-semibold">You are good to go</span>}
                </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <img
              src="http://sirum.org/wp-content/uploads/2022/07/globe-hand.png"
              className="h-auto"
              alt="..."
            />
          </div>
        </div>

        <div>
          <div className="text-left p-2.5 text-2xl">My Name</div>
          <div className="flex flex-row">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[50vw] h-[7vh] p-2.5"
              placeholder="First"
            />
          </div>
          <div className="text-left p-2.5 text-2xl">My Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-full h-[7vh] p-2.5"
            placeholder="Enter email here"
          />
          <div className="text-left p-2.5 text-2xl">My Address</div>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-full h-[7vh] p-2.5"
            placeholder="Address Line 1"
          />
          <div className="flex flex-row">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[33vw] h-[7vh] p-2.5"
              placeholder="City"
            />
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[33vw] h-[7vh] p-2.5"
              placeholder="State"
            />
            <input
              type="text"
              className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[13vw] h-[7vh] p-2.5"
              placeholder="Zipcode"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="bg-gray-300 rounded-xl p-5">
          <div className="font-bold my-4 text-green-600 text-4xl">
            List of Donated Medicine
          </div>
          <div className="p-2.5 text-left flex flex-row">
            
            <div className="w-full">
              <div className="ml-1">Drug Name and Strength</div>
              <input
                value={drugName}
                onChange={(e) => setDrugName(e.target.value)}
                type="text"
                className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5"
                placeholder="Enter drug name..."
              />
            </div>
            <div className="w-full">
              <div className="ml-1">Expiration Date</div>
              <input
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                type="date"
                className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5"
                placeholder=""
              />
            </div>
          </div>
          <div className="p-2.5 text-left flex flex-row">
            <div className="w-full">
              <div className="ml-1">Medicine Type</div>
              <div className="relative w-full flex items-center">
                <input
                  className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5"
                  type="text"
                  value={qtySelected}
                  readOnly
                  onChange={(e) => setQtySelectedValue(e.target.value)}
                  placeholder="select from dropdown"
                />
                <button
                  className="bg-white rounded-lg shadow h-[50px] p-2 text-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <ul
                    className="absolute z-10 mt-48 left-0 bg-white rounded-lg shadow py-2 transform transition duration-200 ease-out"
                    style={{
                      transform: "scaleY(1)",
                    }}
                  >
                    <li
                      className="px-4 cursor-pointer py-2 hover:bg-green-200"
                      onClick={() => handleOptionClick("Pills")}
                    >
                      Pills(Tablets,Capsules,etc)
                    </li>
                    <li
                      className="px-4 cursor-pointer py-2 hover:bg-green-200"
                      onClick={() => handleOptionClick("Mililitres")}
                    >
                      Mililitres(Liquid,Solutions,etc)
                    </li>
                    <li
                      className="px-4 cursor-pointer py-2 hover:bg-green-200"
                      onClick={() => handleOptionClick("Tubes")}
                    >
                      Tubes
                    </li>
                  </ul>
                )}
                {!isOpen && (
                  <ul
                    className="absolute z-10 mt-2 left-0 bg-white rounded-lg shadow py-2 transform transition duration-200 ease-out"
                    style={{
                      transform: "scaleY(0)",
                    }}
                  >
                    <li />
                  </ul>
                )}
              </div>
            </div>
            <div className="w-full">
              <div className="ml-1">Qty</div>
              <input
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                type="text"
                className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5"
                placeholder="Name"
              />
            </div>
          </div>
        </div>
        <button
          className="bg-green-600 my-5 font-semibold rounded-xl hover:bg-green-700 transition ease-in text-white px-6 py-3"
          onClick={() => setClicked(!clicked)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Donate;
