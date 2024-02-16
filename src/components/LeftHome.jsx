import React from "react";
import profile from "../assets/profile_pic.png";
import cover from "../assets/1706369374091.jpeg";
import linkedinGold from "../assets/1631003932486.jpeg";
import { PiTagFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCalendarEvent } from "react-icons/bs";

const LeftHome = () => {
  return (
    <div className="flex flex-col lg:w-1/5 gap-5 mt-4 lg:mt-0">
      <div className="h-full border w-full rounded-lg shadow-md relative bg-white">
        <div className="">
          <img
            src={cover}
            alt=""
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="">
        <img
            src={profile}
            alt=""
            className="w-20 h-20 object-cover lg:top-10 lg:left-[110px] top-16 left-[150px] absolute rounded-full border p-1 bg-white"
          />
        </div>
        <div className="lg:mt-20 mt-16 flex justify-center flex-col lg:items-center ">
          <h1 className="text-xl font-semibold text-center">Pramendra Shukla</h1>
          <p className="mt-2 max-w-full text-center p-3 pt-0 pb-0 text-sm lg:text-base">
            Full-Stack Software Developer |<br /> 1.8+ Years of internships
            Experience in Full Stack Development | Course Instructor @Udemy |
            Ex- TCSiON
          </p>
        </div>
        <hr className="mt-10" />
        <div className="p-5 lg:flex flex-col gap-5 hidden">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-600">Profile viewers</p>
            <p className="text-blue-600">110</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-600">Post impressions</p>
            <p className="text-blue-600">260</p>
          </div>
        </div>
        <hr />
        <div className="p-5 lg:flex hidden flex-col gap-5">
          <p className="text-gray-600">
            Strengthen your profile with an AI writing assistant
          </p>
          <div className="flex gap-2 items-center">
            <img src={linkedinGold} className="w-8 h-8" alt="" />
            <p className="font-bold text-sm">Reactivate Premium: 50% Off</p>
          </div>
        </div>
        <hr className="lg:flex hidden"/>
        <div className="p-5 lg:flex hidden flex-row gap-5 ">
          <PiTagFill className="text-2xl text-gray-600" />
          <p className="font-semibold text-gray-600">My items</p>
        </div>
      </div>

      <div className="h-full border w-full rounded-lg shadow-md bg-white p-5 lg:flex lg:flex-col hidden">
        <div className="mt-3 flex justify-start flex-col items-start ">
          <h1 className="text-lg">Recent</h1>
        </div>
        <div className="mt-5 flex flex-col gap-3 mb-5">
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <FaPeopleGroup className="text-2xl" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <FaPeopleGroup className="text-2xl" />
            <p>ReactJS Community</p>
          </div>
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <BsCalendarEvent className="text-2xl" />
            <p>Docking Certification</p>
          </div>
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <BsCalendarEvent className="text-2xl" />
            <p>JavaScript Event</p>
          </div>
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <FaPeopleGroup className="text-2xl" />
            <p>JavaScript Backend</p>
          </div>
        </div>

        <div className="mt-3 flex justify-start flex-col items-start ">
          <h1 className="text-lg text-blue-600">Groups</h1>
        </div>
        <div className="mt-5 flex flex-col gap-3 mb-5">
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <FaPeopleGroup className="text-2xl" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <FaPeopleGroup className="text-2xl" />
            <p>ReactJS Community</p>
          </div>

          <div className="flex flex-row gap-5 items-center text-gray-600">
            <FaPeopleGroup className="text-2xl" />
            <p>JavaScript Backend</p>
          </div>
        </div>

        <div className="mt-3 flex justify-start flex-col items-start ">
          <h1 className="text-lg text-blue-600">Groups</h1>
        </div>
        <div className="mt-5 flex flex-col gap-3 mb-5">
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <BsCalendarEvent className="text-2xl" />
            <p>Docking Certification</p>
          </div>
          <div className="flex flex-row gap-5 items-center text-gray-600">
            <BsCalendarEvent className="text-2xl" />
            <p>JavaScript Event</p>
          </div>

          <div className="flex flex-row gap-5 items-center text-gray-600">
            <BsCalendarEvent className="text-2xl" />
            <p>JavaScript Backend</p>
          </div>
        </div>

        <hr />
        <div className=" flex flex-row gap-5 w-full justify-center mt-5">
          <p className="font-semibold text-center text-gray-600">
            Discover More
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
