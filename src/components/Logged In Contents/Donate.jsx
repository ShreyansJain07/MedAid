import React,{useState} from "react";

const Donate = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [last,setLast] = useState("");
  const [address,setAddress] = useState("")
  const [city,setCity] = useState("")
  const [state,setState] = useState("")
  const [drugName,setDrugName] = useState("")
  const [exp,setExp] = useState("")
  const [qty,setQty] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [qtySelected, setQtySelectedValue] = useState("");

  const handleOptionClick = (value) => {
    setQtySelectedValue(value);
    setIsOpen(false);
  };

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
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[50vw] h-[7vh] p-2.5" placeholder="First" />
            <input value={last} onChange={(e)=> setLast(e.target.value)} type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[50vw] h-[7vh] p-2.5" placeholder="Last" />
          </div>
          <div className="text-left p-2.5 text-2xl">My Email</div>
          <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[97.7vw] h-[7vh] p-2.5" placeholder="Enter email here" />
          <div className="text-left p-2.5 text-2xl">My Address</div>
          <input value={address} onChange={(e)=> setAddress(e.target.value)} type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[97.7vw] h-[7vh] p-2.5" placeholder="Address Line 1" />
          <div className="flex flex-row">
            <input value={city} onChange={(e)=> setCity(e.target.value)} type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[33vw] h-[7vh] p-2.5" placeholder="City" />
            <input value={state} onChange={(e)=> setState(e.target.value)} type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[33vw] h-[7vh] p-2.5" placeholder="State" />
            <input type="text" className="bg-gray-300 border-4 border-white text-black-400 text-lg rounded-lg focus:border-green-400 block w-[33vw] h-[7vh] p-2.5" placeholder="Zipcode" />
          </div>
        </div>
        <br /><br />
        <div className="bg-gray-300 p-3">
          <div className="font-bold text-4xl">List of Donated Medicine</div>
          <div>Item</div>
          <div className="p-2.5 flex flex-row">
            {/* <div>
              <div>National Drug Code (NDC)</div>
              <input type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="" />
            </div>
            <div>
              <div>Formatted NDC</div>
              <input type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="" />
            </div> */}
            <div>
              <div>Drug Name and Strength</div>
              <input value={drugName} onChange={(e)=> setDrugName(e.target.value)} type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="" />
            </div>
          </div>
          <div className="p-2.5 flex flex-row">
            <div>
              <div>Expiration Date</div>
              <input value={exp} onChange={(e)=> setExp(e.target.value)} type="date" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="" />
            </div>
            {/* <div>
              <div>Qty Type</div>
              <input type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="Name" />
            </div> */}
            <div className="relative">
      <input
        className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5"
        type="text"
        value={qtySelected}
        readOnly
        onChange={(e)=>setQtySelectedValue(e.target.value)}
        placeholder="select from dropdown"
      />
      <button
        className="bg-white rounded-lg shadow p-2 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        ⬇
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 mt-2 left-0 bg-white rounded-lg shadow py-2 transform transition duration-200 ease-out"
          style={{
            transform: "scaleY(1)",
          }}
        >
          <li
            className="px-4 py-2 hover:bg-gray-200"
            onClick={() => handleOptionClick("Pills")}
          >
            Pills(Tablets,Capsules,etc)
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-200"
            onClick={() => handleOptionClick("Mililitres")}
          >
            Mililitres(Liquid,Solutions,etc)
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-200"
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
            <div>
              <div>Qty</div>
              <input value={qty} onChange={(e)=> setQty(e.target.value)} type="text" className="bg-white border-4 border-gray-300 text-black-400 text-lg rounded-lg focus:border-green-400 block w-[32vw] h-[7vh] p-2.5" placeholder="Name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
