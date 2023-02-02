import React,{useState} from "react";

const Volunteer = () => {
  const [isVol,setIsVol] = useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("")
  const handleClick = (e) =>{
    e.preventDefault();
    console.log("i was clicked");
    console.log(name,phone,address);
  }
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
                value={name}
                onChange={(e)=> setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="address">
                Address
              </label>
              <textarea
                className="w-full border border-gray-400 p-2"
                id="address"
                name="address"
                rows="4"
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={handleClick}
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
