import React,{useState,useEffect} from "react";
import VolunteerDashboard from "./VolunteerDashboard";
import axios from "axios";

const Volunteer = () => {
  const [isVol,setIsVol] = useState(false);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("")
  const [clicked,setClicked] = useState(false)
  const handleClick = (e) =>{
    setClicked(!clicked)
    e.preventDefault();
    setIsVol(true);
  }
  useEffect(()=>{
    if(name && email && phone && address){
      console.log(name,email);
      axios.post("https://localhost:5000/contact",{
        name:name,
        email:email,
        phone:phone,
        address:address
      })
    }
  },[clicked])
  return ( <>
    {!isVol ? <div>
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
    </div> :<VolunteerDashboard /> }
    </>
  );
};

export default Volunteer;
