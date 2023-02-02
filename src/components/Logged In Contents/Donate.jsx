import React from "react";

const Donate = () => {
  return (
    <div>
      <div className="min-h-screen p-3">
        <div className="flex flex-row">
          <div className="w-1/2 p-4 text-5xl font-semibold">
            Ready to donate?
          </div>
          <div className="w-1/2 p-4">image</div>
        </div>
        <div>
          <div>Donated medicine</div>
          <div className="flex flex-row">
            <input className="w-fit mx-3" type="checkbox" name="" id="" />
            <div className="w-fit">Is not a</div>
          </div>
          <div className="flex flex-row">
            <input className="w-fit mx-3" type="checkbox" name="" id="" />
            <div className="w-fit">Is not a</div>
          </div>
        </div>
        <div>
          <div>My Name</div>
          <div className="flex flex-row">
            <input type="text" className="border" placeholder="Name" />
            <input type="text" className="border" placeholder="Name" />
          </div>
          <div>My Email</div>
          <input type="email" className="border" placeholder="Name" />
          <div>My Address</div>
          <input type="text" className="border block" placeholder="Name" />
          <input type="text" className="border block" placeholder="Name" />
          <input type="text" className="border" placeholder="Name" />
          <input type="text" className="border" placeholder="Name" />
          <input type="text" className="border" placeholder="Name" />
        </div>
        <div className="bg-gray-200 p-3">
          <div className="font-bold">List of Donated Medicine</div>
          <div>Item</div>
          <div className="flex flex-row">
            <div>
              <div>Nation</div>
              <input type="text" className="border" placeholder="Name" />
            </div>
            <div>
              <div>Nation</div>
              <input type="text" className="border" placeholder="Name" />
            </div>
            <div>
              <div>Nation</div>
              <input type="text" className="border" placeholder="Name" />
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <div>Nation</div>
              <input type="text" className="border" placeholder="Name" />
            </div>
            <div>
              <div>Nation</div>
              <input type="text" className="border" placeholder="Name" />
            </div>
            <div>
              <div>Nation</div>
              <input type="text" className="border" placeholder="Name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
