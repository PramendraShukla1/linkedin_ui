import React from "react";
import RightHome from "../components/RightHome";
import MiddleHome from "../components/MiddleHome";
import LeftHome from "../components/LeftHome";

const Home = () => {
  return (
    <div className="w-full flex justify-center lg:p-5">
      <div className="lg:max-w-[1500px] max-w-full flex flex-col lg:flex-row gap-10">
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
