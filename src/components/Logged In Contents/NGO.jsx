import axios from "axios";
import React, { useEffect, useState } from "react";

const NGO = ({ med, setMed }) => {
  const [current, setCurrent] = useState("NGO 1");

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/getmedicine`)
  //     .then(function (response) {
  //       setMed(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const [curr, setCurr] = useState(true);
  // const [first, setfirst] = useState(second)

  return (
    <div className="bg-gray-200 p-5">
      <div className="bg-white flex rounded-xl flex-row">
        <div className="min-h-[60vh] w-[40vw] py-5 px-4">
          <div className="text-2xl font-bold text-green-600 mb-5">Groups</div>
          <div
            onClick={() => setCurrent("NGO 1")}
            // className="cursor-pointer w-full transition ease-in hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6"
            className={`${
              current == "NGO 1" ? "bg-green-400" : ""
            } cursor-pointer w-full transition ease-in my-4 hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6`}
          >
            NGO 1
          </div>
          <div
            onClick={() => setCurrent("NGO 2")}
            // className="my-4 cursor-pointer w-full transition ease-in hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6"
            className={`${
              current == "NGO 2" ? "bg-green-400" : ""
            } cursor-pointer w-full transition ease-in my-4 hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6`}
          >
            NGO 2
          </div>
          <div
            onClick={() => setCurrent("NGO 3")}
            // className="my-4 cursor-pointer w-full transition ease-in hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6"
            className={`${
              current == "NGO 3" ? "bg-green-400" : ""
            } cursor-pointer w-full transition ease-in my-4 hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6`}
          >
            NGO 3
          </div>
          <div
            onClick={() => setCurrent("NGO 4")}
            // className="my-4 cursor-pointer w-full transition ease-in hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6"
            className={`${
              current == "NGO 4" ? "bg-green-400" : ""
            } cursor-pointer w-full transition ease-in my-4 hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6`}
          >
            NGO 4
          </div>
        </div>
        <div className=" border-l-2 min-h-[60vh] w-full p-5">
          <div className="w-full font-semibold rounded-lg border-2 border-green-600 py-2 px-6">
            {current}
          </div>
          <div className="flex flex-row my-5">
            <div className="cursor-pointer text-sm font-semibold hover:bg-green-600 w-full bg-green-500 text-white py-2 rounded-md mx-1">
              Currently Available
            </div>
            <div className="cursor-pointer text-sm font-semibold hover:bg-green-600 w-full bg-green-500 text-white py-2 rounded-md mx-1">
              Required
            </div>
            <div className="cursor-pointer text-sm font-semibold hover:bg-green-600 w-full bg-green-500 text-white py-2 rounded-md mx-1">
              Delivery Request
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NGO;
