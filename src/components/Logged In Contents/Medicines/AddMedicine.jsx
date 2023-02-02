import React from "react";

const AddMedicine = () => {
  return (
    <div className="p-8">
      Medicines
      <div className="bg-gray-200 p-3 text-left">
        <div className="font-serif text-green-600 text-3xl">Medicine</div>
        <div className="flex flex-row">
          <div className="w-3/12 px-1">
            <div>Medicine name</div>
          </div>
          <div className="w-3/12 px-1">
            <div>Medicine details</div>
          </div>
          <div className="w-2/12 px-1">
            <div>Medicine quantity</div>
          </div>
          <div className="w-3/12 px-1">
            <div>Medicine quantity type</div>
          </div>
          <div className="w-3/12 px-1">
            <div>Medicine expiry date</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
