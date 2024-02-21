import React from 'react'
import LeftJob from '../components/Job/LeftJob'
import MiddleJob from '../components/Job/MiddleJob'
import RightJob from '../components/Job/RightJob'

const Jobs = () => {
  return (
    <div className="w-full flex justify-center lg:p-5">
      <div className="lg:max-w-[1550px] max-w-full flex flex-col lg:flex-row gap-10">
        {/* Right Part Start */}
       <LeftJob/>
        {/* Middle Part Start */}
        <MiddleJob />
        {/* End Part Start */}
        <RightJob />
      </div>
    </div>
  )
}

export default Jobs