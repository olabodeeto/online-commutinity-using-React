import React from "react";
import profileImg from "../../assets/img/profile.jpg";
import { Ribbon, Planet, ChatDots, Gear } from "akar-icons";
// import myavatar from "../../assets/img/myavatar.png";

export default function LeftSidebar() {
  return (
    <>
      <div className="w-3/12 md:w-4/12 lg:w-3/12 p-2  bg-white">
        <div className="flex flex-col justify-center items-center mb-10">
          <div className=" border-2 bg-purple-600 rounded-full p-1">
            {/* <img className="w-50 object-cover" src={profileImg} alt="" /> */}
            <img
              className="w-20 h-20 xl:w-40 xl:h-40  object-cover rounded-full"
              src={profileImg}
              alt=""
            />
          </div>
          <div className="mt-5 w-full px-5">
            <p className="mt-2 text-md font-extrabold text-gray-600">
              Mark Dennis
            </p>
            <p className="text-gray-400">@Markdennis</p>
            <p className="font-light mt-4 text-gray-600 md:text-sm xl:text-lg">
              Blockchain developer/Investor ceo/founder @futurechain
            </p>
            <div className="mt-5 flex gap-10 text-gray-500 md:text-sm xl:text-lg">
              <div className="flex gap-4">
                <p>Network</p>
                <p className="text-gray-800">24k</p>
              </div>

              <div className="flex gap-4">
                <p>Deals</p>
                <p className="text-gray-800">20</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 px-5 text-gray-500 font-light">
          <p className="py-2 flex">
            <Ribbon size={24} className="mr-2" />
            News feed
          </p>
          <p className="py-2 flex">
            <Planet size={24} className="mr-2" />
            Network
          </p>
          <p className="py-2 flex">
            <ChatDots size={24} className="mr-2" />
            Messages
          </p>
          <p className="py-2 flex">
            <Gear size={24} className="mr-2" />
            Settings
          </p>
        </div>
      </div>
    </>
  );
}
