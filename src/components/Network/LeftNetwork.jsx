import React from "react";
import { FaUsers, FaUser, FaHashtag } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const LeftNetwork = () => {
  return (
    <div className="h-fit w-1/4 rounded-xl bg-white shadow-lg flex flex-col">
      <div className="p-5 pb-0">
        <h1 className="text-2xl font-normal text-gray-700">
          Manage my network
        </h1>
      </div>
      {/* //! Full List  */}
      <div className="flex flex-col p-7 pt-0">
        {/* //!Individual Items */}
        <div className="mt-5 flex justify-between items-center text-gray-600">
          <div className="flex gap-8 items-center">
            <FaUsers className="text-3xl" />
            <p className="text-xl">Connections</p>
          </div>

          <p className="text-xl">782</p>
        </div>

        <div className="mt-5 flex justify-between items-center text-gray-600">
          <div className="flex gap-8 items-center">
            <RiContactsBook2Fill className="text-3xl" />
            <p className="text-xl">Contacts</p>
          </div>
          <p className="text-xl">506</p>
        </div>

        <div className="mt-5 flex justify-between items-center text-gray-600">
          <div className="flex gap-8 items-center">
            <FaUser className="text-3xl" />
            <p className="text-xl">Following & followers</p>
          </div>
          <p className="text-xl">120</p>
        </div>

        <div className="mt-5 flex justify-between items-center text-gray-600">
          <div className="flex gap-8 items-center">
            <MdGroups2 className="text-3xl" />
            <p className="text-xl">Groups</p>
          </div>
          <p className="text-xl">4</p>
        </div>

        <div className="mt-5 flex justify-between items-center text-gray-600">
          <div className="flex gap-8 items-center">
            <BsCalendarEvent className="text-3xl" />
            <p className="text-xl">Events</p>
          </div>
          <p className="text-xl">6</p>
        </div>

        <div className="mt-5 flex justify-between items-center text-gray-600">
          <div className="flex gap-8 items-center">
            <HiOutlineOfficeBuilding className="text-3xl" />
            <p className="text-xl">Pages</p>
          </div>
          <p className="text-xl">33</p>
        </div>

        <div className="mt-5 flex justify-between items-center text-gray-600">
          <div className="flex gap-8 items-center">
            <FaRegNewspaper className="text-3xl" />
            <p className="text-xl">Newsletters</p>
          </div>
          <p className="text-xl">2</p>
        </div>

        <div className="mt-5 flex justify-between items-center text-gray-600">
          <div className="flex gap-8 items-center">
            <FaHashtag className="text-3xl" />
            <p className="text-xl">Hashtags</p>
          </div>
          <p className="text-xl"></p>
        </div>

        <div className="mt-7 flex gap-1 items-center text-gray-600">
          <p className="text-2xl">Show less</p>
          <IoIosArrowUp className="text-2xl" />
        </div>
      </div>
      <hr className="" />

      <div className="p-20 pt-5 pb-5 text-gray-500 flex flex-row flex-wrap gap-5 justify-center">
        <p>About</p>
        <p>Accessibility</p>
        <p>Help Center</p>
        <p className="flex items-center">
          Privacy & Terms <MdKeyboardArrowDown className="text-2xl" />
        </p>
        <p>Ad Choices</p>
        <p>Advertising</p>
        <p className="flex items-center">
          Business Services <MdKeyboardArrowDown className="text-2xl" />
        </p>
        <p>Get the LinkedIn app</p>
        <p>More</p>
      </div>
      <div className="p-10 pt-0 ">
        <p className="text-lg text-blue-800 font-semibold">
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
  );
};

export default LeftNetwork;
