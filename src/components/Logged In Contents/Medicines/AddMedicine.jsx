import React, { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AddMedicine = ({ med, setMed }) => {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getmedicine`)
      .then(function (response) {
        setMed(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const date1 = new Date("7/13/2010");
  // const date2 = new Date("12/15/2010");
  // const diffTime = Math.abs(date2 - date1);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffDays + " days");

  return (
    <div className="p-8 min-h-[90vh]">
      <div className="bg-gray-200 rounded-xl py-3 px-5 text-left">
        <div className="font-serif py-5 text-center font-semibold text-green-600 text-3xl">
          Medicine
        </div>
        {med.map((item,id) => {
          return (
            <div className="drop-shadow-xl flex flex-row my-2 py-4 px-6 bg-white">
              <div className="bg-white w-2/12">
                <div className="text-xs">Name</div>
                <div className="font-semibold">{item.drugName}</div>
              </div>
              <div className="bg-white w-4/12">
                <div className="text-xs">Details</div>
                <div className="font-semibold">{item.highlight}</div>
              </div>
              <div className="bg-white w-8/12">
                <div className="text-xs">More Details</div>
                <div className="font-semibold">{item.snippet}</div>
              </div>
              <div className="bg-white w-[90px]">
                <div className="text-xs">Qty</div>
                <div className="font-semibold">{item.qty}</div>
              </div>
              <div className="bg-white w-[200px]">
                <div className="text-xs">Type</div>
                <div className="font-semibold">{item.qtySelected}</div>
              </div>
              <div className="bg-white w-[100px]">
                <div className="text-xs">Expiry Date</div>
                <div className="font-semibold">{item.exp}</div>
              </div>
              <div className="bg-white w-[100px] mx-3">
                <div className="text-xs">Days Remaining</div>
                <div className="font-semibold">
                  {
                    // diff(item.exp)
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddMedicine;