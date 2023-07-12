import React from 'react'
import Dropdown from './Dropdown'
import SortBy from './SortBy'

const DashboardHeader = ({page}) => {
   return (

      <header className="flex justify-between pb-4 pr-4">
               
         <h1 className="text-[28px] font-semibold">{page}</h1>

         <span className=" flex items-center gap-6 text-[#828282]">

            <span className=" flex items-center gap-1">
               <i class="fa-regular fa-bell text-[24px]"></i>
               <i class="fa-solid fa-caret-down"></i>
            </span>
            <span className=" flex items-center gap-1">
               <i class="fa-solid fa-circle-user text-[24px]"></i>
               <i class="fa-solid fa-caret-down"></i>
            </span>
            
            <Dropdown />

         </span>

      </header>
   )
}

export default DashboardHeader
