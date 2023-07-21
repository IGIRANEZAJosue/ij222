import React, { useState } from 'react'
import Dropdown from './Dropdown'
import SortBy from './SortBy'

const DashboardHeader = ({page}) => {

   const notifications = [{
      "id": 1,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 2,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 3,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 4,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 5,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 6,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 7,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 8,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 9,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 10,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 11,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 12,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 13,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 14,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 15,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 16,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 17,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }, {
      "id": 18,
      "notification": "You have Increased 50 points on your Level Progression. Your current points are 910."
    }]
    

   const [notificationPanel, setNotificationPanel] = useState(false);

   const handleNotificationPanel = () => {
      setNotificationPanel(!notificationPanel);
   };

   return (

      <header className="flex justify-between pb-4 pr-4">
               
         <h1 className="text-[28px] font-semibold">{page}</h1>

         <span className=" flex items-center gap-6 text-[#828282]">

            <span onClick={handleNotificationPanel} className=" flex items-center gap-1 cursor-pointer">
               <i class="fa-regular fa-bell text-[24px]"></i>
               <i class="fa-solid fa-caret-down"></i>
            </span>
            <span className=" flex items-center gap-1">
               <i class="fa-solid fa-circle-user text-[24px]"></i>
               <i class="fa-solid fa-caret-down"></i>
            </span>
            
            <Dropdown />

         </span>

         <div className={ notificationPanel ? " p-4 fixed top-0 w-[20vw] right-0 z-30 h-screen bg-white shadow-lg  ease-in-out duration-500 " : " fixed right-[-100%]" }>
            <header className="flex items-center justify-between pb-4">
               <h1 className=' font-bold text-xl'>Notifications</h1>
               <span onClick={handleNotificationPanel} className=" flex justify-center items-center hover:bg-red-100 hover:text-red-400 p-2 rounded-full w-8 h-8 cursor-pointer duration-300">
                  <i className="fa-solid fa-xmark text-[18px]"></i>
               </span>
            </header>

               {notifications.map((noti) => (
                  <div key={noti.id} className="text-[14px] flex flex-col gap-3 mb-3">
                     <div className=" bg-primaryCol/10 w-full p-3 rounded-xl">
                        <p>
                           {noti.notification}
                        </p>
                        <span className="flex items-center gap-2 mt-2 text-xs text-black/60">
                           <i className="fa-regular fa-clock"></i>
                           <p>1 DAY AGO</p>
                        </span>
                     </div>
                  </div>
               ))}
            

         </div>

      </header>
   )
}

export default DashboardHeader
