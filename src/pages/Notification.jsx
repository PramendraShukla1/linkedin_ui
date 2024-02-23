import React from 'react'
import LeftNotification from '../components/Notifications/LeftNotification'
import MiddleNotification from '../components/Notifications/MiddleNotification'
import RightNotification from '../components/Notifications/RightNotification'

const Notification = () => {
  return (
    <div className="w-full flex justify-center lg:p-5">
    <div className="lg:max-w-[1550px] lg:min-w-[1300px] min-w-full w-fit max-w-full flex flex-col lg:flex-row gap-10 mt-5">
     <LeftNotification/>
     <MiddleNotification/>
     <RightNotification/>
    </div>
 
  </div>
  )
}

export default Notification