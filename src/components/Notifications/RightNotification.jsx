import React from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import profile from "../../assets/profile_pic.png";
import sita from "../../assets/sita.jpeg";

const RightNotification = () => {
  return (
    <div className="w-1/5 h-fit rounded-xl p-2">
      <div className="w-full bg-white h-fit border rounded-xl p-2">
        <div className="flex items-center gap-2 text-gray-600 text-sm justify-end">
          <p>Ad</p>
          <PiDotsThreeOutlineFill />
        </div>
        <div className="flex justify-center mt-3 flex-col items-center">
          <p className="text-sm text-gray-500">
            Get the latest jobs and industry news
          </p>
          <div className="mt-5 flex gap-5 items-center justify-center">
            <img
              src={profile}
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <img src={sita} alt="" className="w-20 h-20" />
          </div>
          <p className="text-center mt-4 text-gray-600">
            Pramendra, explore relevant opportunities with{" "}
            <span className="font-semibold text-gray-800">SITA</span>
          </p>
        </div>
        <div className="flex justify-center mt-5 mb-10">
          <button className="p-2 border font-semibold text-blue-700 rounded-full border-blue-700 pl-8 pr-8">
            Follow
          </button>
        </div>
      </div>

      <div className="h-fit p-10 flex flex-wrap gap-3 text-gray-500 text-sm justify-center ">
        <p>About</p>
        <p>Accessibility</p>
        <p>Help Center</p>
        <p>Privacy & Terms</p>
        <p>Ad Choices</p>
        <p>Advertising</p>
        <p>Business Services</p>
        <p>Get the LinkedLn app</p>
        <p>More</p>

        <div className="p-10 pt-0 pb-0">
          <p className="text-sm text-blue-800 font-semibold">
            Linked{" "}
            <span className="bg-blue-800 font-bold text-white p-1 rounded-md">
              in
            </span>{" "}
            <span className="text-black font-normal">
              LinkedIn Corporation © 2024
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightNotification;
