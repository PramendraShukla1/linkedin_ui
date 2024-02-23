import React from "react";
import job1 from "../../assets/job1.jpeg";
import job2 from "../../assets/job2.jpeg";
import job3 from "../../assets/job3.jpeg";
import job4 from "../../assets/job4.jpeg";
import job5 from "../../assets/job5.jpeg";
import job6 from "../../assets/job6.jpeg";
import { RxCross1 } from "react-icons/rx";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

const MiddleJob = () => {
  return (
    <div className="flex flex-col  gap-5 lg:w-[600px] w-full justify-start">
      <div className="h-full border w-full rounded-lg shadow-md bg-white p-5">
        <div className=" h-20 flex flex-col gap-1">
          <p className="font-semibold text-xl">Recommended for you</p>
          <p className="text-gray-500 text-base">
            Based on your profile and search history
          </p>
        </div>
        <div className="flex gap-5 flex-col">
          <div className="  h-40 flex flex-row justify-between">
            <div className="w-1/6 ">
              <img src={job1} alt="" className="object-cover w-5/6" />
            </div>
            <div className="w-4/5">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-lg font-semibold text-[#0a66c2]">
                  Full Stack Developer
                  <IoShieldCheckmarkOutline className="text-xl text-gray-500 font-semibold" />
                </h1>
                <RxCross1 className="text-2xl text-gray-500" />
              </div>
              <div className="flex flex-col  gap-0.5">
                <p>Uplers</p>
                <p className="text-gray-500">
                  Ranchi, Jharkhand, India (Remote)
                </p>
                <p className="text-gray-500 text-sm">$24K/yr - $36K/yr</p>
                <p className="text-gray-500 text-sm">1 connection works here</p>
                <p className="mt-2 flex items-center text-gray-500 text-sm">
                  Promoted <LuDot />{" "}
                  <span className="text-sm font-semibold text-green-800">
                    3 applicants
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="  h-40 flex flex-row justify-between">
            <div className="w-1/6 ">
              <img src={job2} alt="" className="object-cover w-5/6" />
            </div>
            <div className="w-4/5">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-lg font-semibold text-[#0a66c2]">
                  Full Stack Developer
                  <IoShieldCheckmarkOutline className="text-xl text-gray-500 font-semibold" />
                </h1>
                <RxCross1 className="text-2xl text-gray-500" />
              </div>
              <div className="flex flex-col  gap-0.5">
                <p>Uplers</p>
                <p className="text-gray-500">
                  Ranchi, Jharkhand, India (Remote)
                </p>
                <p className="text-gray-500 text-sm">$24K/yr - $36K/yr</p>
                <p className="text-gray-500 text-sm">1 connection works here</p>
                <p className="mt-2 flex items-center text-gray-500 text-sm">
                  Promoted <LuDot />{" "}
                  <span className="text-sm font-semibold text-green-800">
                    3 applicants
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="  h-40 flex flex-row justify-between">
            <div className="w-1/6 ">
              <img src={job3} alt="" className="object-cover w-5/6" />
            </div>
            <div className="w-4/5">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-lg font-semibold text-[#0a66c2]">
                  Full Stack Developer
                  <IoShieldCheckmarkOutline className="text-xl text-gray-500 font-semibold" />
                </h1>
                <RxCross1 className="text-2xl text-gray-500" />
              </div>
              <div className="flex flex-col  gap-0.5">
                <p>Uplers</p>
                <p className="text-gray-500">
                  Ranchi, Jharkhand, India (Remote)
                </p>
                <p className="text-gray-500 text-sm">$24K/yr - $36K/yr</p>
                <p className="text-gray-500 text-sm">1 connection works here</p>
                <p className="mt-2 flex items-center text-gray-500 text-sm">
                  Promoted <LuDot />{" "}
                  <span className="text-sm font-semibold text-green-800">
                    3 applicants
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="  h-40 flex flex-row justify-between">
            <div className="w-1/6 ">
              <img src={job4} alt="" className="object-cover w-5/6" />
            </div>
            <div className="w-4/5">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-lg font-semibold text-[#0a66c2]">
                  Full Stack Developer
                  <IoShieldCheckmarkOutline className="text-xl text-gray-500 font-semibold" />
                </h1>
                <RxCross1 className="text-2xl text-gray-500" />
              </div>
              <div className="flex flex-col  gap-0.5">
                <p>Uplers</p>
                <p className="text-gray-500">
                  Ranchi, Jharkhand, India (Remote)
                </p>
                <p className="text-gray-500 text-sm">$24K/yr - $36K/yr</p>
                <p className="text-gray-500 text-sm">1 connection works here</p>
                <p className="mt-2 flex items-center text-gray-500 text-sm">
                  Promoted <LuDot />{" "}
                  <span className="text-sm font-semibold text-green-800">
                    3 applicants
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="  h-40 flex flex-row justify-between">
            <div className="w-1/6 ">
              <img src={job5} alt="" className="object-cover w-5/6" />
            </div>
            <div className="w-4/5">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-lg font-semibold text-[#0a66c2]">
                  Full Stack Developer
                  <IoShieldCheckmarkOutline className="text-xl text-gray-500 font-semibold" />
                </h1>
                <RxCross1 className="text-2xl text-gray-500" />
              </div>
              <div className="flex flex-col  gap-0.5">
                <p>Uplers</p>
                <p className="text-gray-500">
                  Ranchi, Jharkhand, India (Remote)
                </p>
                <p className="text-gray-500 text-sm">$24K/yr - $36K/yr</p>
                <p className="text-gray-500 text-sm">1 connection works here</p>
                <p className="mt-2 flex items-center text-gray-500 text-sm">
                  Promoted <LuDot />{" "}
                  <span className="text-sm font-semibold text-green-800">
                    3 applicants
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="  h-40 flex flex-row justify-between">
            <div className="w-1/6 ">
              <img src={job6} alt="" className="object-cover w-5/6" />
            </div>
            <div className="w-4/5">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1 text-lg font-semibold text-[#0a66c2]">
                  Full Stack Developer
                  <IoShieldCheckmarkOutline className="text-xl text-gray-500 font-semibold" />
                </h1>
                <RxCross1 className="text-2xl text-gray-500" />
              </div>
              <div className="flex flex-col  gap-0.5">
                <p>Uplers</p>
                <p className="text-gray-500">
                  Ranchi, Jharkhand, India (Remote)
                </p>
                <p className="text-gray-500 text-sm">$24K/yr - $36K/yr</p>
                <p className="text-gray-500 text-sm">1 connection works here</p>
                <p className="mt-2 flex items-center text-gray-500 text-sm">
                  Promoted <LuDot />{" "}
                  <span className="text-sm font-semibold text-green-800">
                    3 applicants
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleJob;
