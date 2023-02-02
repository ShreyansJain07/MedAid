import React from "react";

const AddMedicine = ({ med, setMed }) => {
  return (
    <div className="p-8 min-h-[90vh]">
      <div className="bg-gray-200 rounded-xl py-3 px-5 text-left">
        <div className="font-serif py-5 text-center font-semibold text-green-600 text-3xl">Medicine</div>
        {med.map((item) => {
          return (
            <div className="drop-shadow-xl flex flex-row my-2 py-4 px-6 bg-white">
              <div className="bg-white w-2/12">
                <div className="text-xs">Name</div>
                <div className="font-semibold">{item.name}</div>
              </div>
              <div className="bg-white w-8/12">
                <div className="text-xs">Details</div>
                <div className="font-semibold">{item.details}</div>
              </div>
              <div className="bg-white w-[90px]">
                <div className="text-xs">Qty</div>
                <div className="font-semibold">{item.qty}</div>
              </div>
              <div className="bg-white w-[200px]">
                <div className="text-xs">Type</div>
                <div className="font-semibold">{item.qtyType}</div>
              </div>
              <div className="bg-white w-[100px]">
                <div className="text-xs">Expiry Date</div>
                <div className="font-semibold">{item.exp}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddMedicine;
