import React from 'react'
import { Link } from 'react-router-dom';

const Reminders = () => {
   return (
      <div className="flex flex-col items-center gap-3">
         <div className="flex gap-2 items-center">
            <div className="p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center rounded-3 text-[24px] text-[#C81E1E] bg-[#FBD5D5] ">
               <i class="fa-regular fa-clock"></i>
            </div>
            <div>
               <p className="text-xs font-medium">You have a loan payment due on the 5th may.</p>
               <small>5 minutes ago</small>
            </div>
         </div> 
         <div className="flex gap-4 items-center">
            <div className="p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center rounded-3 text-[24px] text-[#1A56DB] bg-[#C3DDFD] ">
               <i class="fa-regular fa-circle-dollar"></i>
            </div>
            <div>
               <p className="text-xs font-medium">You have a loan payment due on the 5th may.</p>
               <small>5 minutes ago</small>
            </div>
         </div> 
         <div className="flex gap-4 items-center">
            <div className="p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center rounded-3 text-[24px] text-[#00bfa6] bg-[#BCF0DA]/50 ">
               <img className="w-[24px] h-[24px] " src="images/trending-up2.svg"/>
            </div>
            <div>
               <p className="text-xs font-medium">You have a loan payment due on the 5th may.</p>
               <small>5 minutes ago</small>
            </div>
         </div> 
         <div className="flex gap-4 items-center">
            <div className="p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center rounded-3 text-[24px] text-[#C81E1E] bg-[#FBD5D5] ">
               <i class="fa-light fa-hand-holding-dollar"></i>
            </div>
            <div>
               <p className="text-xs font-medium">You have a loan payment due on the 5th may.</p>
               <small>5 minutes ago</small>
            </div>
         </div>
         <Link to="/notifications"><h1 className="font-semibold text-primary flex items-center ">View All <i class="fa-solid fa-chevron-right text-sm ml-2"></i> </h1></Link> 
      </div>
   )
}

export default Reminders;
