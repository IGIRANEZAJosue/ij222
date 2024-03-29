import React, { useState } from 'react'
import Dropdown from './Dropdown'
import SortBy from './SortBy'
import NotificationPanel from './NotificationPanel'
import ProfilePanel from './ProfilePanel'

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
   const [profilePanel, setProfilePanel] = useState(false);


   const handleNotificationPanel = () => {
      setNotificationPanel(!notificationPanel);
   };

   const handleProfilePanel = () => {
      setProfilePanel(!profilePanel);
   };


   return (

      <header className="flex justify-between pb-4 pr-4">
               
         <h1 className="text-[28px] font-semibold">{page}</h1>

         <span className=" flex items-center gap-6 text-[#828282]">

            <span onClick={handleNotificationPanel} className=" flex items-center gap-1 cursor-pointer">
               <i class="fa-regular fa-bell text-[24px]"></i>
               <i class="fa-solid fa-caret-down"></i>
            </span>
            <span onClick={handleProfilePanel} className=" flex items-center gap-1 cursor-pointer">
               <i class="fa-solid fa-circle-user text-[24px]"></i>
               <i class="fa-solid fa-caret-down"></i>
            </span>
            
            <Dropdown />

         </span>

         {/*NOTIFICATION PANEL*/}
         <NotificationPanel notificationPanel={notificationPanel} handleNotificationPanel={handleNotificationPanel} />

         <ProfilePanel handleProfilePanel={handleProfilePanel} profilePanel={profilePanel} />

      </header>
   )
}

export default DashboardHeader
