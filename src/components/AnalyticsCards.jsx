import React from 'react'
import { Link } from "react-router-dom";

const AnalyticsCards = () => {
   return (
      <div className=" flex gap-6 text-gray-900 " >

         <div className="card1 w-1/3 p-4 flex justify-between items-center bg-white rounded-xl">
            <div className=" flex flex-col gap-[6px]">
               <p className=" font-semibold text-[#828282]">MEMBERS</p>
               <h1 className=" font-bold text-[30px]">30,220</h1>
               <p className=" text-xs ">6 May - 7 May</p>
            </div>
            <span className=" flex flex-col items-center">
               <h1 className=" font-semibold text-[30px] text-success">+15%</h1>
               <p className=" text-xs">Since last month</p>
            </span>
         </div>
         
         <div className="card2 w-1/3 p-4 flex justify-between items-center bg-white rounded-xl">
            <div className=" flex flex-col gap-[6px]">
               <p className=" font-semibold text-[#828282]">REVENUE</p>
               <h1 className=" font-bold text-[30px]">$3,220</h1>
               <p className=" text-xs ">6 May - 7 May</p>
            </div>
            <span className=" flex flex-col items-center">
               <h1 className=" font-semibold text-[30px] text-success">+5%</h1>
               <p className=" text-xs">Since last month</p>
            </span>
         </div>
         
         <div className="card3 w-1/3 p-4 flex justify-between items-center bg-white rounded-xl">
            <div className=" flex flex-col gap-[6px]">
               <p className=" font-semibold text-[#828282]">CONTRIBUTIONS</p>
               <h1 className=" font-bold text-[30px]">$2,220</h1>
               <p className=" text-xs ">6 May - 7 May</p>
            </div>
            <span className=" flex flex-col items-center">
               <h1 className=" font-semibold text-[30px] text-danger">-1%</h1>
               <p className=" text-xs">Since last month</p>
            </span>
         </div>
         
      </div>
      
  )
}

export default AnalyticsCards;
