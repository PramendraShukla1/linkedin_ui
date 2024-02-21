import React from "react";
import resume from "../../assets/resume_job.gif";
import { FaArrowRightLong } from "react-icons/fa6";

const RightJob = () => {
  return (
    <div className="flex flex-col  gap-5 w-96 justify-start">
      <div className="h-fit border w-full rounded-lg shadow-md bg-white">
        <div className="h-24 w-full flex flex-col justify-center p-5">
          <p className="font-semibold text-lg">Job seeker guidance</p>
          <p className="text-sm text-gray-500">
            Recommended based on your activity
          </p>
        </div>

        <div className="h-24 w-full bg-gray-50 flex flex-row justify-between">
          <div className="w-3/5 p-5">
            <p className="text-base font-semibold">
              I want to improve my resume
            </p>
          </div>
          <div className="w-1/3 p-2">
            <img
              src={resume}
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="p-5 text-base leading-6">
          <p>
            Explore our curated guide of expert-led courses, such as how to
            improve your resume and grow your network, to help you land your
            next opportunity.
          </p>
          <div className="mt-2">
            <p className="text-base font-semibold text-gray-500 flex items-center gap-1">
              Show more <FaArrowRightLong />
            </p>
          </div>
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

export default RightJob;
