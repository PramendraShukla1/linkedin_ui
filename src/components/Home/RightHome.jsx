import React from "react";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const RightHome = () => {
  return (
    <div className="w-1/4 lg:flex lg:flex-col hidden">
    <div className="h-fit w-full rounded-lg shadow-lg bg-white p-5">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Linkedin News</h1>
        <BsFillInfoSquareFill className="text-2xl" />
      </div>
      <div className=" p-5">
        <ul>
          <div>
            <li className="list-disc text-lg font-semibold">
              India Inc on CTO talent hunt
            </li>
            <p className="text-gray-600">21h ago</p>
          </div>
          <div className="mt-5">
            <li className="list-disc text-lg font-semibold">
              SpiceJet to lay off 1,400 people
            </li>
            <p className="text-gray-600">1d ago</p>
          </div>
          <div className="mt-5">
            <li className="list-disc text-lg font-semibold">
              Chart your online course
            </li>
            <p className="text-gray-600">23h ago</p>
          </div>
          <div className="mt-5">
            <li className="list-disc text-lg font-semibold">
              Perks to spur return to office?
            </li>
            <p className="text-gray-600">18h ago</p>
          </div>
          <div className="mt-5">
            <li className="list-disc text-lg font-semibold">
              B2B fintech set to soar
            </li>
            <p className="text-gray-600">2d ago</p>
          </div>
        </ul>
      </div>
      <div className="p-3 flex gap-1 items-center text-gray-600 font-semibold">
        <p className="text-xl">Show more</p>
        <RiArrowDropDownLine className="text-4xl" />
      </div>
    </div>

    <div className="mt-5  h-fit p-10 flex flex-wrap gap-5 text-gray-600 justify-center ">
<p>About</p>
<p>Accessibility</p>
<p>Help Center</p>
<p>Privacy & Terms</p>
<p>Ad Choices</p>
<p>Advertising</p>
<p>Business Services</p>
<p>Get the LinkedLn app</p>
<p>More</p>
    </div>

    <div className="p-10 pt-0 ">
      <p className="text-lg text-blue-800 font-semibold">Linked <span className="bg-blue-800 font-bold text-white p-1 rounded-md">in</span> <span className="text-black font-normal">LinkedIn Corporation © 2024</span></p>
    </div>
    </div>
  );
};

export default RightHome;
