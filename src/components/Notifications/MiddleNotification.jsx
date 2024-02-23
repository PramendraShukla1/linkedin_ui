import React from "react";
import profile from "../../assets/dp.webp";
import post from "../../assets/post.jpeg";
import notification1 from "../../assets/notification1.jpeg";
import notification2 from "../../assets/notification2.jpeg";
import notification3 from "../../assets/notification3.jpeg";
import notification4 from "../../assets/notification4.jpeg";
import notification5 from "../../assets/notification5.jpeg";
import notification6 from "../../assets/notification6.jpeg";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const MiddleNotification = () => {
  return (
    <div className="min-w-[600px] lg:w-1/2 h-full rounded-xl flex gap-5 flex-col">
      <div className="bg-white h-16 rounded-xl justify-start flex items-center gap-5 p-3">
        <button className="border rounded-full p-2 pl-5 pr-5 text-white font-semibold bg-green-800 cursor-not-allowed">
          All
        </button>
        <button className="border rounded-full p-2 pl-5 pr-5 text-gray-600 font-semibold border-gray-500 cursor-not-allowed">
          My posts
        </button>
        <button className="border rounded-full p-2 pl-5 pr-5 text-gray-600 font-semibold border-gray-500 cursor-not-allowed">
          Mentions
        </button>
      </div>

      <div className="bg-white h-full flex flex-col gap-4 rounded-xl p-3">
        <div className="w-full h-fit flex gap-3">
          <div className="w-20 justify-center flex items-start">
            <img
              src={profile}
              alt=""
              className="w-14 h-14 object-cover rounded-full"
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <h1>
                <span className="font-bold">Someone</span> and 11 others liked
                your post
              </h1>
              <p className="text-sm text-gray-500">59m</p>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div className="w-full border rounded-xl h-fit flex gap-2 items-center">
                <div className="">
                  <img
                    src={post}
                    alt=""
                    className="w-full h-24 object-cover rounded-l-xl"
                  />
                </div>
                <div className="flex h-full items-center">
                  <p className="h-full text-sm w-full">
                    Created this beautiful UI of Microsoft Outlook using vite
                    and Tailwind CSS, It is optimized...
                  </p>
                </div>
              </div>
              <PiDotsThreeOutlineFill className="text-2xl text-gray-500" />
            </div>
            <div>
              <p className="text-sm  mt-1 text-gray-500">13 Reactions</p>
            </div>
          </div>
        </div>
        <div className="justify-between flex gap-2 items-center">
          <div className=" mt-3 h-fit w-full flex">
            <div className="w-1/6 h-full flex justify-center">
              <img
                src={notification1}
                alt=""
                className="w-14 h-14 object-cover "
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base">
                  <span className="font-semibold">Deloitte </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minus placeat iste asperiores a consequatur quisquam
                  ducimus ea dolor nulla ullam dolores, exercitationem sit
                  tenetur fuga assumenda vitae ...
                </p>
                <div>
                  <p className="text-sm text-gray-500">1d</p>
                  <PiDotsThreeOutlineFill className="text-2xl text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-between flex gap-2 items-center">
          <div className=" mt-3 h-fit w-full flex">
            <div className="w-1/6 h-full flex justify-center">
              <img
                src={notification2}
                alt=""
                className="w-14 h-14 object-cover "
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base">
                  <span className="font-semibold">Infosys </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minus placeat iste asperiores a consequatur quisquam
                  ducimus ea dolor nulla ullam dolores, exercitationem sit
                  tenetur fuga assumenda vitae ...
                </p>
                <div>
                  <p className="text-sm text-gray-500">1d</p>
                  <PiDotsThreeOutlineFill className="text-2xl text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="justify-between flex gap-2 items-center">
          <div className=" mt-3 h-fit w-full flex">
            <div className="w-1/6 h-full flex justify-center">
              <img
                src={notification3}
                alt=""
                className="w-14 h-14 object-cover "
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base">
                  <span className="font-semibold">Deloitte </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minus placeat iste asperiores a consequatur quisquam
                  ducimus ea dolor nulla ullam dolores, exercitationem sit
                  tenetur fuga assumenda vitae ...
                </p>
                <div>
                  <p className="text-sm text-gray-500">1d</p>
                  <PiDotsThreeOutlineFill className="text-2xl text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="justify-between flex gap-2 items-center">
          <div className=" mt-3 h-fit w-full flex">
            <div className="w-1/6 h-full flex justify-center">
              <img
                src={notification4}
                alt=""
                className="w-14 h-14 object-cover "
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base">
                  <span className="font-semibold">Google </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minus placeat iste asperiores a consequatur quisquam
                  ducimus ea dolor nulla ullam dolores, exercitationem sit
                  tenetur fuga assumenda vitae ...
                </p>
                <div>
                  <p className="text-sm text-gray-500">1d</p>
                  <PiDotsThreeOutlineFill className="text-2xl text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="justify-between flex gap-2 items-center">
          <div className=" mt-3 h-fit w-full flex">
            <div className="w-1/6 h-full flex justify-center">
              <img
                src={notification5}
                alt=""
                className="w-14 h-14 object-cover "
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base">
                  <span className="font-semibold">Deloitte </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minus placeat iste asperiores a consequatur quisquam
                  ducimus ea dolor nulla ullam dolores, exercitationem sit
                  tenetur fuga assumenda vitae ...
                </p>
                <div>
                  <p className="text-sm text-gray-500">1d</p>
                  <PiDotsThreeOutlineFill className="text-2xl text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="justify-between flex gap-2 items-center">
          <div className=" mt-3 h-fit w-full flex">
            <div className="w-1/6 h-full flex justify-center">
              <img
                src={notification6}
                alt=""
                className="w-14 h-14 object-cover "
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base">
                  <span className="font-semibold">JP Morgan Chase </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minus placeat iste asperiores a consequatur quisquam
                  ducimus ea dolor nulla ullam dolores, exercitationem sit
                  tenetur fuga assumenda vitae ...
                </p>
                <div>
                  <p className="text-sm text-gray-500">1d</p>
                  <PiDotsThreeOutlineFill className="text-2xl text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNotification;
