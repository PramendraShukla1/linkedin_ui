import React from "react";
import img from "../assets/react.png";
import { IoMdSearch } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { GoBellFill } from "react-icons/go";
import { IoAppsSharp } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import profile from "../assets/profile_pic.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full min-h-20 bg-white flex justify-center p-2 lg:p-0">
      <div className="lg:min-w-[1500px] min-w-full h-20 flex items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <img src={img} alt="" className="lg:w-12 lg:h-12 w-10 h-10" />
          <div className="lg:flex hidden items-center bg-[#edf3f8] rounded-lg p-2 ">
            <IoMdSearch className="text-2xl text-gray-600 ml-3" />
            <input
              type="text"
              placeholder="Search"
              className="p-2 w-72 outline-none bg-[#edf3f8] placeholder:text-lg rounded-lg"
            />
          </div>
          <IoMdSearch className="text-2xl text-gray-600 ml-3 lg:hidden flex" />
        </div>
        <div className="flex lg:gap-10 gap-7 items-center">
          <Link
            to={"/"}
            className="flex items-center hover:text-black flex-col "
          >
            <AiFillHome className="lg:text-3xl text-2xl" />
            <p className="lg:flex hidden">Home</p>
          </Link>
          <Link
            to={"/mynetwork/"}
            className="flex items-center flex-col cursor-pointer hover:text-black  text-gray-600"
          >
            <FaUserFriends className="lg:text-3xl text-2xl" />
            <p className="lg:flex hidden">My Network</p>
          </Link>
          <Link
            to={"/jobs/"}
            className="flex items-center flex-col cursor-pointer hover:text-black  text-gray-600"
          >
            <BsSuitcaseLgFill className="lg:text-3xl text-2xl" />
            <p className="lg:flex hidden">Jobs</p>
          </Link>
          <div className="flex items-center flex-col  text-gray-600">
            <RiMessage2Fill className="lg:text-3xl text-2xl" />
            <p className="lg:flex hidden">Messaging</p>
          </div>
          <Link
            to={"/notifications/"}
            className="flex items-center flex-col cursor-pointer hover:text-black  text-gray-600"
          >
            <GoBellFill className="lg:text-3xl text-2xl" />
            <p className="lg:flex hidden">Notifications</p>
          </Link>

          <div className="lg:flex hidden items-center flex-col text-gray-600 border-r pr-10">
            <img
              src={profile}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex items-center">
              <p>Me</p>
              <IoMdArrowDropdown className="text-xl" />
            </div>
          </div>
          <div className="lg:flex hidden items-center flex-col  text-gray-600">
            <IoAppsSharp className="text-3xl" />
            <div className="flex items-center">
              <p>For Business</p>
              <IoMdArrowDropdown className="text-xl" />
            </div>
          </div>
          <div className="lg:flex hidden items-center flex-col text-gray-600 ">
            <GoGoal className="text-3xl" />
            Advertise
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
