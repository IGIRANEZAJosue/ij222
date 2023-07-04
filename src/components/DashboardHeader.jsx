import React from 'react'

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

            <button className=" flex items-center justify-center w-12 h-12 bg-primaryCol/20 rounded-xl hover:outline outline-3">
               <h1 className=" font-bold text-textBlack text-[20px]">M</h1>
            </button>
               
         </span>

      </header>
   )
}

export default DashboardHeader
