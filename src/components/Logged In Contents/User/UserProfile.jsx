import React from "react";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="font-quicksand flex min-h-screen bg-gray-200">
      <div className="w-1/4 pl-3">
        <div className="bg-white my-3 py-1 px-3 pl-3 rounded-xl min-h-[83vh]">
          <div className="text-center mt-2 font-quicksand font-semibold text-xl -ml-1 mb-1">
            Profile page
          </div>
          <img
            className="mx-auto w-[170px] h-[170px] rounded-xl my-4"
            src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
            alt=""
          />
          <div className="text-center font-quicksand font-semibold text-xl">
            {/* {username} */} username
          </div>
          <hr />
          <div>
            <div className="font-semibold font-quicksand mt-7">
              Badges Earned
            </div>
            {/* <div className="flex my-2 justify-evenly">
              <img className="w-[65px] rounded-lg" src={days10} alt="" />
              <img className="w-[65px] rounded-lg" src={days25} alt="" />
              <img className="w-[65px] rounded-lg" src={days50} alt="" />
              <img className="w-[65px] rounded-lg" src={days100} alt="" />
              <img className="w-[65px] rounded-lg" src={year1} alt="" />
            </div> */}
          </div>
          <div>
            <div className="font-semibold font-quicksand mx-auto w-fit my-7 flex">
              Your ZenCoins:
              <div className="flex ml-3">
                {/* {currentCoins} */} 1000
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 fill-yellow-400 stroke-yellow-700 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center">
              <NavLink
                to="/activities"
                className="bg-green-600 text-white hover:bg-green-700 font-quicksand transition ease-in rounded-xl font-semibold py-3 px-6"
              >
                Earn more ZenCoins
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 p-3">
        <div className="bg-white min-h-[187px] mb-3 p-3 rounded-xl">
          <div className="font-semibold flex flex-row justify-between text-xl mb-1">
            <div>Medicines donated till now</div>
          </div>
          {/* <Task currentCoins={currentCoins} setCurrentCoins={setCurrentCoins} /> */}
        </div>
        <div className="flex flex-row w-full">
          <NavLink
            to="/donate"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl ml-3"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Donate
            </div>
            <img
              className="h-[170px] object-contain cursor-pointer mx-auto"
              src="https://img.freepik.com/free-vector/volunteers-packing-donation-boxes_74855-5299.jpg?w=2000"
              alt=""
            />
          </NavLink>
          <NavLink
            to="/addmedicine"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl ml-3"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Receive/Shop
            </div>
            <img
              className="object-contain mx-auto h-[170px] cursor-pointer"
              src="https://static.vecteezy.com/system/resources/previews/003/098/607/non_2x/cartoon-cute-delivery-man-with-uniform-giving-parcel-to-woman-customer-vector.jpg"
              alt=""
            />
          </NavLink>
          <NavLink
            to="/volunteer"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl ml-3"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Volunteer
            </div>
            <img
              className="object-contain mx-auto h-[170px] cursor-pointer"
              src="https://kalamfoundation.org/wp-content/uploads/2021/05/people-volunteering-donating-money_53876-43052.jpg"
              alt=""
            />
          </NavLink>
          <NavLink
            to="/volunteer"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl ml-3"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Volunteer
            </div>
            <img
              className="object-contain mx-auto h-[170px] cursor-pointer"
              src="https://img.freepik.com/free-vector/community-concept-illustration_114360-1021.jpg?w=2000"
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
