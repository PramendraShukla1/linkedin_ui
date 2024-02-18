import React from "react";
import profile from "../../assets/profile_pic.png";
import { RiArticleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaRegImage } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import dp from "../../assets/dp.webp";
import { FaGlobeAmericas } from "react-icons/fa";
import post1 from "../../assets/1707060572725.jpeg";
import post2 from "../../assets/1707844915034.jpeg";
import post3 from "../../assets/1707850022447.jpeg";
import post4 from "../../assets/1707870694475.jpeg";
import { AiFillLike } from "react-icons/ai" ;
import { FaThumbsUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { FaRegSmile } from "react-icons/fa";

const MiddleHome = () => {
  return (
    <div className="h-96 lg:w-1/2 w-full rounded-lg ">
      <div className="w-full h-fit shadow-lg rounded-xl bg-white p-3">
        <div className="flex gap-3 items-center w-full">
          <div>
            <img
              src={profile}
              alt=""
              className="lg:w-16 lg:h-16 w-12 h-12 rounded-full object-cover shadow-md border bg-red-200"
            />
          </div>
          <div className="w-full ">
            <input
              type="text"
              placeholder="Start a post"
              className="border w-full lg:p-5 p-2 rounded-full placeholder:text-lg placeholder:font-medium border-gray-400 outline-none text-lg placeholder:text-gray-600"
            />
          </div>
        </div>
        <div className="mt-5 flex lg:p-10 p-0 lg:pt-2 lg:pb-5 justify-between">
          <div className="flex items-center gap-3 text-lg font-semibold text-gray-600">
            <FaRegImage className="text-blue-600 text-2xl" />
            <p>Media</p>
          </div>
          <div className="flex items-center gap-3 text-lg font-semibold text-gray-600">
            <SlCalender className="text-yellow-600 text-2xl" />
            <p>Event</p>
          </div>
          <div className="flex items-center gap-3 text-lg font-semibold text-gray-600">
            <RiArticleLine className="text-orange-600 text-2xl" />
            <p>Write article</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full items-center gap-5 mt-5">
        <hr className="mt-5 mb-5 h-0.5 bg-gray-400 lg:w-4/5 w-3/4" />
        <p className="text-gray-700 lg:w-1/6 w-1/4 flex gap-2 lg:text-base text-sm">
          Sort by:{" "}
          <span className="font-semibold text-black flex items-center">
            Top <IoMdArrowDropdown className="lg:text-2xl text-sm" />
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {/* Card 1 Starts */}

        <div className="w-full h-fit border rounded-lg bg-white p-3">
          <div className="w-full h-20 flex justify-between">
            <div className="flex flex-row gap-3 items-center">
              <img
                src={dp}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">
                  Pramendra Shukla{" "}
                  <span className="font-normal text-gray-600">. 1st</span>
                </p>
                <p className="lg:text-base text-sm">Student at Noida Institute of Engineering and Technology</p>
                <p className="font-medium text-gray-600 flex items-center gap-1 lg:text-base text-sm">
                  8h .{" "}
                  <span>
                    <FaGlobeAmericas />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <BsThreeDots className="text-2xl text-gray-600 cursor-pointer hover:text-black" />
              <IoClose className="text-2xl text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </div>
          <div className="w-full h-fit mt-3 flex flex-col gap-2">
            <p className="lg:text-xl text-lg font-normal ">
              Created this beautiful UI of Microsoft Outlook using Vite and
              Tailwind CSS, It is optimized for large and extra large screen
              only
            </p>
            <p className="lg:text-xl text-lg  font-normal ">
              Github -{" "}
              <span className="font-semibold text-blue-400">
                https://lnkd.in/dz9vfhRA
              </span>
            </p>
            <p className="lg:text-xl text-lg  font-normal ">
              Deployed Link -{" "}
              <span className="font-semibold text-blue-400">
                https://lnkd.in/dtYvbX6m
              </span>
            </p>
            <p className="lg:text-xl text-lg  font-semibold text-blue-500 ">
              #reactjs #javascript #tailwindcss #outlook #vite
            </p>
          </div>
          <div className="mt-3 h-fit w-full">
            <img
              src={post1}
              alt=""
              className="h-96 w-full object-cover rounded-lg"
            />
            <div className="mt-2 pl-3 flex items-center gap-2">
              <AiFillLike className="text-2xl text-blue-400" />
              <p className="text-gray-700 text-lg">You and 7 others</p>
            </div>
            <hr className="mb-5 mt-2 lg:h-0.5 lg:bg-black bg-gray-300" />
          </div>
          <div className="mt-5">
            <p className="text-2xl font-normal text-black">Reactions</p>
            <div className="flex justify-around lg:p-10 pt-0 pb-0 h-20 w-full mt-3">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>
            </div>
            <div className="w-full lg:h-20 h-fit lg:mt-5 mb-5  flex items-center gap-5 justify-between">
              <div className="w-1-6 flex items-center  h-full gap-1">
                <img
                  src={profile}
                  alt=""
                  className="lg:h-16 lg:w-16 w-8 h-8 rounded-full object-cover "
                />
                <IoMdArrowDropdown className="text-3xl text-gray-600" />
              </div>
              <div className="w-4/5  flex justify-between h-full">
                <div className="flex items-center lg:text-xl text-sm text-blue-500 gap-1">
                  <AiFillLike className="lg:text-3xl text-sm" />
                  <p className="font-semibold">Like</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600 gap-1">
                  <FaRegCommentDots className="lg:text-3xl text-sm " />
                  <p className="font-medium">Comment</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600  gap-1">
                  <BiRepost className="lg:text-3xl text-sm " />
                  <p className="font-medium">Repost</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600  gap-1">
                  <IoIosSend className="lg:text-3xl text-sm " />
                  <p className="font-medium">Send</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg text-gray-600">
              <VscGraph className="lg:text-3xl text-2xl text-gray-600" />
              <p className="font-semibold text-sm lg:text-base">240 impressions</p>
            </div>
            <div className="font-semibold text-blue-600">
              <p className="text-sm lg:text-xl">View analytics</p>
            </div>
          </div>
          <div className=" h-16 w-full gap-2 mt-2 flex justify-between">
            <div className="w-fit h-full flex items-center">
              <img
                src={profile}
                alt=""
                className="lg:w-14 lg:h-14 h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div className="w-full h-full border flex items-center rounded-full lg:p-3 p-2 pb-0 pt-0 lg:pb-3 lg:pt-3">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full h-full outline-none p-3"
              />
              <div className="flex gap-5 lg:text-3xl text-xl text-gray-600">
                <FaRegSmile />
                <FaRegImage />
              </div>
            </div>
          </div>
        </div>

       {/* Card 1 Starts */}

       <div className="w-full h-fit border rounded-lg bg-white p-3">
          <div className="w-full h-20 flex justify-between">
            <div className="flex flex-row gap-3 items-center">
              <img
                src={dp}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">
                  Pramendra Shukla{" "}
                  <span className="font-normal text-gray-600">. 1st</span>
                </p>
                <p className="lg:text-base text-sm">Student at Noida Institute of Engineering and Technology</p>
                <p className="font-medium text-gray-600 flex items-center gap-1 lg:text-base text-sm">
                  8h .{" "}
                  <span>
                    <FaGlobeAmericas />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <BsThreeDots className="text-2xl text-gray-600 cursor-pointer hover:text-black" />
              <IoClose className="text-2xl text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </div>
          <div className="w-full h-fit mt-3 flex flex-col gap-2">
            <p className="lg:text-xl text-lg font-normal ">
              Created this beautiful UI of Microsoft Outlook using Vite and
              Tailwind CSS, It is optimized for large and extra large screen
              only
            </p>
            <p className="lg:text-xl text-lg  font-normal ">
              Github -{" "}
              <span className="font-semibold text-blue-400">
                https://lnkd.in/dz9vfhRA
              </span>
            </p>
            <p className="lg:text-xl text-lg  font-normal ">
              Deployed Link -{" "}
              <span className="font-semibold text-blue-400">
                https://lnkd.in/dtYvbX6m
              </span>
            </p>
            <p className="lg:text-xl text-lg  font-semibold text-blue-500 ">
              #reactjs #javascript #tailwindcss #outlook #vite
            </p>
          </div>
          <div className="mt-3 h-fit w-full">
            <img
              src={post2}
              alt=""
              className="h-96 w-full object-cover rounded-lg"
            />
            <div className="mt-2 pl-3 flex items-center gap-2">
              <AiFillLike className="text-2xl text-blue-400" />
              <p className="text-gray-700 text-lg">You and 7 others</p>
            </div>
            <hr className="lg:h-0.5 lg:bg-black bg-gray-300" />
          </div>
          <div className="mt-5">
            <p className="text-2xl font-normal text-black">Reactions</p>
            <div className="flex justify-around lg:p-10 pt-0 pb-0 h-20 w-full mt-3">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>
            </div>
            <div className="w-full lg:h-20 h-fit lg:mt-5 mb-5  flex items-center gap-5 justify-between">
              <div className="w-1-6 flex items-center  h-full gap-1">
                <img
                  src={profile}
                  alt=""
                  className="lg:h-16 lg:w-16 w-8 h-8 rounded-full object-cover "
                />
                <IoMdArrowDropdown className="text-3xl text-gray-600" />
              </div>
              <div className="w-4/5  flex justify-between h-full">
                <div className="flex items-center lg:text-xl text-sm text-blue-500 gap-1">
                  <AiFillLike className="lg:text-3xl text-sm" />
                  <p className="font-semibold">Like</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600 gap-1">
                  <FaRegCommentDots className="lg:text-3xl text-sm " />
                  <p className="font-medium">Comment</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600  gap-1">
                  <BiRepost className="lg:text-3xl text-sm " />
                  <p className="font-medium">Repost</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600  gap-1">
                  <IoIosSend className="lg:text-3xl text-sm " />
                  <p className="font-medium">Send</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg text-gray-600">
              <VscGraph className="lg:text-3xl text-2xl text-gray-600" />
              <p className="font-semibold text-sm lg:text-base">240 impressions</p>
            </div>
            <div className="font-semibold text-blue-600">
              <p className="text-sm lg:text-xl">View analytics</p>
            </div>
          </div>
          <div className=" h-16 w-full gap-2 mt-2 flex justify-between">
            <div className="w-fit h-full flex items-center">
              <img
                src={profile}
                alt=""
                className="lg:w-14 lg:h-14 h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div className="w-full h-full border flex items-center rounded-full lg:p-3 p-2 pb-0 pt-0 lg:pb-3 lg:pt-3">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full h-full outline-none p-3"
              />
              <div className="flex gap-5 lg:text-3xl text-xl text-gray-600">
                <FaRegSmile />
                <FaRegImage />
              </div>
            </div>
          </div>
        </div>


       {/* Card 1 Starts */}

       <div className="w-full h-fit border rounded-lg bg-white p-3">
          <div className="w-full h-20 flex justify-between">
            <div className="flex flex-row gap-3 items-center">
              <img
                src={dp}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">
                  Pramendra Shukla{" "}
                  <span className="font-normal text-gray-600">. 1st</span>
                </p>
                <p className="lg:text-base text-sm">Student at Noida Institute of Engineering and Technology</p>
                <p className="font-medium text-gray-600 flex items-center gap-1 lg:text-base text-sm">
                  8h .{" "}
                  <span>
                    <FaGlobeAmericas />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <BsThreeDots className="text-2xl text-gray-600 cursor-pointer hover:text-black" />
              <IoClose className="text-2xl text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </div>
          <div className="w-full h-fit mt-3 flex flex-col gap-2">
            <p className="lg:text-xl text-lg font-normal ">
              Created this beautiful UI of Microsoft Outlook using Vite and
              Tailwind CSS, It is optimized for large and extra large screen
              only
            </p>
            <p className="lg:text-xl text-lg  font-normal ">
              Github -{" "}
              <span className="font-semibold text-blue-400">
                https://lnkd.in/dz9vfhRA
              </span>
            </p>
            <p className="lg:text-xl text-lg  font-normal ">
              Deployed Link -{" "}
              <span className="font-semibold text-blue-400">
                https://lnkd.in/dtYvbX6m
              </span>
            </p>
            <p className="lg:text-xl text-lg  font-semibold text-blue-500 ">
              #reactjs #javascript #tailwindcss #outlook #vite
            </p>
          </div>
          <div className="mt-3 h-fit w-full">
            <img
              src={post3}
              alt=""
              className="h-96 w-full object-cover rounded-lg"
            />
            <div className="mt-2 pl-3 flex items-center gap-2">
              <AiFillLike className="text-2xl text-blue-400" />
              <p className="text-gray-700 text-lg">You and 7 others</p>
            </div>
            <hr className="lg:h-0.5 lg:bg-black bg-gray-300" />
          </div>
          <div className="mt-5">
            <p className="text-2xl font-normal text-black">Reactions</p>
            <div className="flex justify-around lg:p-10 pt-0 pb-0 h-20 w-full mt-3">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>
            </div>
            <div className="w-full lg:h-20 h-fit lg:mt-5 mb-5  flex items-center gap-5 justify-between">
              <div className="w-1-6 flex items-center  h-full gap-1">
                <img
                  src={profile}
                  alt=""
                  className="lg:h-16 lg:w-16 w-8 h-8 rounded-full object-cover "
                />
                <IoMdArrowDropdown className="text-3xl text-gray-600" />
              </div>
              <div className="w-4/5  flex justify-between h-full">
                <div className="flex items-center lg:text-xl text-sm text-blue-500 gap-1">
                  <AiFillLike className="lg:text-3xl text-sm" />
                  <p className="font-semibold">Like</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600 gap-1">
                  <FaRegCommentDots className="lg:text-3xl text-sm " />
                  <p className="font-medium">Comment</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600  gap-1">
                  <BiRepost className="lg:text-3xl text-sm " />
                  <p className="font-medium">Repost</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600  gap-1">
                  <IoIosSend className="lg:text-3xl text-sm " />
                  <p className="font-medium">Send</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg text-gray-600">
              <VscGraph className="lg:text-3xl text-2xl text-gray-600" />
              <p className="font-semibold text-sm lg:text-base">240 impressions</p>
            </div>
            <div className="font-semibold text-blue-600">
              <p className="text-sm lg:text-xl">View analytics</p>
            </div>
          </div>
          <div className=" h-16 w-full gap-2 mt-2 flex justify-between">
            <div className="w-fit h-full flex items-center">
              <img
                src={profile}
                alt=""
                className="lg:w-14 lg:h-14 h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div className="w-full h-full border flex items-center rounded-full lg:p-3 p-2 pb-0 pt-0 lg:pb-3 lg:pt-3">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full h-full outline-none p-3"
              />
              <div className="flex gap-5 lg:text-3xl text-xl text-gray-600">
                <FaRegSmile />
                <FaRegImage />
              </div>
            </div>
          </div>
        </div>



        {/* Card 1 Starts */}

        <div className="w-full h-fit border rounded-lg bg-white p-3">
          <div className="w-full h-20 flex justify-between">
            <div className="flex flex-row gap-3 items-center">
              <img
                src={dp}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">
                  Pramendra Shukla{" "}
                  <span className="font-normal text-gray-600">. 1st</span>
                </p>
                <p className="lg:text-base text-sm">Student at Noida Institute of Engineering and Technology</p>
                <p className="font-medium text-gray-600 flex items-center gap-1 lg:text-base text-sm">
                  8h .{" "}
                  <span>
                    <FaGlobeAmericas />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <BsThreeDots className="text-2xl text-gray-600 cursor-pointer hover:text-black" />
              <IoClose className="text-2xl text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </div>
          <div className="w-full h-fit mt-3 flex flex-col gap-2">
            <p className="lg:text-xl text-lg font-normal ">
              Created this beautiful UI of Microsoft Outlook using Vite and
              Tailwind CSS, It is optimized for large and extra large screen
              only
            </p>
            <p className="lg:text-xl text-lg  font-normal ">
              Github -{" "}
              <span className="font-semibold text-blue-400">
                https://lnkd.in/dz9vfhRA
              </span>
            </p>
            <p className="lg:text-xl text-lg  font-normal ">
              Deployed Link -{" "}
              <span className="font-semibold text-blue-400">
                https://lnkd.in/dtYvbX6m
              </span>
            </p>
            <p className="lg:text-xl text-lg  font-semibold text-blue-500 ">
              #reactjs #javascript #tailwindcss #outlook #vite
            </p>
          </div>
          <div className="mt-3 h-fit w-full">
            <img
              src={post4}
              alt=""
              className="h-96 w-full object-cover rounded-lg"
            />
            <div className="mt-2 pl-3 flex items-center gap-2">
              <AiFillLike className="text-2xl text-blue-400" />
              <p className="text-gray-700 text-lg">You and 7 others</p>
            </div>
            <hr className="lg:h-0.5 lg:bg-black bg-gray-300" />
          </div>
          <div className="mt-5">
            <p className="text-2xl font-normal text-black">Reactions</p>
            <div className="flex justify-around lg:p-10 pt-0 pb-0 h-20 w-full mt-3">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
                <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="lg:h-16 lg:w-16 w-10 h-10 rounded-full object-cover "
                />
               <FaThumbsUp className="absolute lg:top-11 lg:left-11 top-7 left-7 text-blue-500 lg:text-xl text-sm" />
              </div>
            </div>
            <div className="w-full lg:h-20 h-fit lg:mt-5 mb-5  flex items-center gap-5 justify-between">
              <div className="w-1-6 flex items-center  h-full gap-1">
                <img
                  src={profile}
                  alt=""
                  className="lg:h-16 lg:w-16 w-8 h-8 rounded-full object-cover "
                />
                <IoMdArrowDropdown className="text-3xl text-gray-600" />
              </div>
              <div className="w-4/5  flex justify-between h-full">
                <div className="flex items-center lg:text-xl text-sm text-blue-500 gap-1">
                  <AiFillLike className="lg:text-3xl text-sm" />
                  <p className="font-semibold">Like</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600 gap-1">
                  <FaRegCommentDots className="lg:text-3xl text-sm " />
                  <p className="font-medium">Comment</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600  gap-1">
                  <BiRepost className="lg:text-3xl text-sm " />
                  <p className="font-medium">Repost</p>
                </div>
                <div className="flex items-center lg:text-xl text-sm text-gray-600  gap-1">
                  <IoIosSend className="lg:text-3xl text-sm " />
                  <p className="font-medium">Send</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg text-gray-600">
              <VscGraph className="lg:text-3xl text-2xl text-gray-600" />
              <p className="font-semibold text-sm lg:text-base">240 impressions</p>
            </div>
            <div className="font-semibold text-blue-600">
              <p className="text-sm lg:text-xl">View analytics</p>
            </div>
          </div>
          <div className=" h-16 w-full gap-2 mt-2 flex justify-between">
            <div className="w-fit h-full flex items-center">
              <img
                src={profile}
                alt=""
                className="lg:w-14 lg:h-14 h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div className="w-full h-full border flex items-center rounded-full lg:p-3 p-2 pb-0 pt-0 lg:pb-3 lg:pt-3">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full h-full outline-none p-3"
              />
              <div className="flex gap-5 lg:text-3xl text-xl text-gray-600">
                <FaRegSmile />
                <FaRegImage />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default MiddleHome;
