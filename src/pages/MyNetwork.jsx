import React from "react";
import LeftNetwork from "../components/Network/LeftNetwork";
import RightNetwork from "../components/Network/RightNetwork";

const MyNetwork = () => {
  return (
    <div className="w-full flex justify-center lg:p-5">
      <div className="lg:max-w-[1550px] lg:min-w-[1500px] min-w-full max-w-full flex flex-col lg:flex-row gap-10 mt-5">
        <LeftNetwork/>
        <RightNetwork/>
      </div>
   
    </div>
  );
};

export default MyNetwork;
