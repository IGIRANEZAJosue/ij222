import React from "react";
export function DashboardHeader({}) {
  return <header className="flex justify-between pb-4">
               <h1 className="text-3xl font-bold">Dashboard</h1>

               <span className=" flex items-center gap-6 text-[#828282]">

                  <i class="fa-regular fa-bell text-[24px]"></i>
                  <i class="fa-solid fa-circle-user text-[24px]"></i>

                  <span className=" bg-primaryCol/20 px-4 py-2 rounded-lg">
                     <h1 className=" font-bold text-gray-800 text-[16px]">N</h1>
                  </span>
               
               </span>
            </header>;
}
  