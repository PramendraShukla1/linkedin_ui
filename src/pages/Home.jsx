import React from "react";
import RightHome from "../components/Home/RightHome";
import MiddleHome from "../components/Home/MiddleHome";
import LeftHome from "../components/Home/LeftHome";

const Home = () => {
  return (
    <div className="w-full flex justify-center lg:p-5">
      <div className="lg:max-w-[1550px] max-w-full flex flex-col lg:flex-row gap-10">
        {/* Right Part Start */}
        <LeftHome />
        {/* Middle Part Start */}
        <MiddleHome />
        {/* End Part Start */}
        <RightHome />
      </div>
    </div>
  );
};

export default Home;
