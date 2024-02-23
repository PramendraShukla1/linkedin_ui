import React from "react";
import { FaTag } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsCalendar2Check } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";
import { RiFilePaperLine } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";

const LeftJob = () => {
  return (
    <div className="flex flex-col  gap-5 lg:w-72 w-full justify-start mt-5 lg:mt-0">
      <div className="h-fit border w-full rounded-lg shadow-md bg-white">
        <div className="p-5 pt-10 pb-10 flex flex-col gap-10">
          <div className="flex justify-start items-center gap-5 text-gray-700">
            <FaTag className="text-2xl" />
            <p className="text-xl">My jobs</p>
          </div>
          <div className="flex justify-start items-center gap-5 text-gray-700">
            <TfiMenuAlt className="text-2xl" />
            <p className="text-xl">Preferences</p>
          </div>
          <div className="flex justify-start items-center gap-5 text-gray-700">
            <BsCalendar2Check className="text-2xl" />
            <p className="text-xl">Skill Assessments</p>
          </div>
          <div className="flex justify-start items-center gap-5 text-gray-700">
            <FaNewspaper className="text-2xl" />
            <p className="text-xl">Interview Prep</p>
          </div>
          <div className="flex justify-start items-center gap-5 text-gray-700">
            <RiFilePaperLine className="text-2xl" />
            <p className="text-xl">Resume Builder</p>
          </div>
          <div className="flex justify-start items-center gap-5 text-gray-700">
            <IoLogoYoutube className="text-2xl" />
            <p className="text-xl">Job seeker guidance</p>
          </div>
          <div className="flex justify-start items-center gap-5 text-gray-700">
            <IoMdSettings className="text-2xl" />
            <p className="text-xl">Application settings</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="flex hover:bg-blue-200 text-[#0a66c2] border-[#0a66c2] items-center text-lg gap-2 border p-3 pl-10 pr-10 rounded-full font-semibold">
          <MdOutlineEditNote className="text-3xl" />
          Post a free job
        </button>
      </div>
    </div>
  );
};

export default LeftJob;
