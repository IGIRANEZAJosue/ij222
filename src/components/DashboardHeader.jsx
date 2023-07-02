import React from 'react'

const DashboardHeader = ({page}) => {
   return (

      <header className="flex justify-between pb-4">
               
         <h1 className="text-[32px] font-semibold">{page}</h1>

         <span className=" flex items-center gap-6 text-[#828282]">

            <span className=" flex items-center gap-1">
               <i class="fa-regular fa-bell text-[28px]"></i>
               <i class="fa-solid fa-caret-down"></i>
            </span>
            <span className=" flex items-center gap-1">
               <i class="fa-solid fa-circle-user text-[24px]"></i>
               <i class="fa-solid fa-caret-down"></i>
            </span>

            <span className=" bg-primaryCol/20 px-4 py-1 rounded-xl">
               <h1 className=" font-bold text-textBlack text-[24px]">M</h1>
            </span>
               
         </span>

      </header>
   )
}

export default DashboardHeader
