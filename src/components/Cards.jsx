import React from 'react'
import { Link } from "react-router-dom";

const cards = () => {
   return (
      <div className=" cards flex flex-col gap-2">

         <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Your account</h1>
            <Link to="/payments" className="flex items-center gap-2 text-sm font-bold ">
               <p>View Details</p>
               <i class="fa-solid fa-arrow-right-long"></i>
            </Link>
         </div>

         <div className="cards flex gap-4 ">

            <div className="card flex-1 flex flex-row items-center gap-4 p-4 bg-lightPurple rounded-2xl text-white ">
               <div className="bg-[#8DA2FB]/80 p-2 rounded-lg w-[64px] h[64px] flex justify-center items-center ">
                  <i class="fa-regular fa-circle-dollar text-3xl"></i>
               </div>
               <div>
                  <p className=" font-medium">Total Contributions</p>
                  <h1 className=" font-bold text-2xl ">$1200</h1>
               </div>
            </div>

            <div className="card flex-1 flex flex-row items-center gap-4 p-4 bg-primaryCol rounded-2xl text-white">
               <div className="bg-[#8CEEE1]/50 p-2 rounded-lg w-[64px] h[64px] flex justify-center items-center ">
                  <img src="images/trending-up.svg" />
               </div>
               <div>
                  <p className=" font-medium">Total Shares</p>
                  <h1 className=" font-bold text-2xl ">1159</h1>
               </div>
               <p>+15%</p>
            </div>

            <div className="card flex-1 flex flex-row items-center gap-4 p-4 bg-danger rounded-2xl text-white">
               <div className="bg-[#FFB8B8]/50 p-2 rounded-lg w-[64px] h[64px] flex justify-center items-center ">
                  <i class="fa-light fa-hand-holding-dollar text-3xl"></i>
               </div>
               <div>
                  <p className=" font-medium">Total Loans</p>
                  <h1 className=" font-bold text-2xl ">$3200</h1>
               </div>
            </div>

         </div>   

         
      </div>
      
  )
}

export default cards;
