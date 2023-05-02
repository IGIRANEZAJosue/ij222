import React from 'react'

const Notifications = () => {
   return (
      <div className="p-4 w-[82vw]">
         <header className='text-4xl font-semibold mb-4 '>Notifications</header>
         <div className="notifications w-[70%] flex flex-col gap-4">

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#C81E1E] bg-[#FBD5D5] ">
                  <i class="fa-regular fa-clock"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">You have a loan payment due on the 5th may</p>
                  <small>5 minutes ago</small>
               </div>
            </div>

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#1A56DB] bg-[#C3DDFD] ">
                  <i class="fa-regular fa-circle-dollar"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">You have contributed an amount of $500</p>
                  <small>5 minutes ago</small>
               </div>
            </div>

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#00bfa6] bg-[#BCF0DA]/50 ">
                  <i class="fa-regular fa-arrow-up-right-dots"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">Your shares have increased in value by 15%.</p>
                  <small>5 minutes ago</small>
               </div>
            </div>
            
            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#16a34a] bg-[#86efac]/50 ">
                  <i class="fa-regular fa-circle-check"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">Your loan request for $1200 has been approved.</p>
                  <small>5 minutes ago</small>
               </div>
            </div>

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#C81E1E] bg-[#FBD5D5] ">
                  <i class="fa-light fa-hand-holding-dollar"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">Your loan request of $1200 is pending.</p>
                  <small>5 minutes ago</small>
               </div>
            </div>

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#1A56DB] bg-[#C3DDFD] ">
                  <i class="fa-regular fa-circle-dollar"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">You have contributed an amount of $349</p>
                  <small>5 minutes ago</small>
               </div>
            </div>

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#00bfa6] bg-[#BCF0DA]/50 ">
                  <i class="fa-regular fa-arrow-up-right-dots"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">Your shares have increased in value by 5%.</p>
                  <small>5 minutes ago</small>
               </div>
            </div>

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#C81E1E] bg-[#FBD5D5] ">
                  <i class="fa-regular fa-clock"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">You have a loan payment due on the 5th may</p>
                  <small>5 minutes ago</small>
               </div>
            </div>

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#1A56DB] bg-[#C3DDFD] ">
                  <i class="fa-regular fa-circle-dollar"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">You have contributed an amount of $500</p>
                  <small>5 minutes ago</small>
               </div>
            </div>

            <div className="flex gap-4 items-center">
               <div className="p-3 w-[64px] h-[64px] rounded-xl flex justify-center items-center rounded-3 text-[32px] text-[#00bfa6] bg-[#BCF0DA]/50 ">
                  <i class="fa-regular fa-arrow-up-right-dots"></i>
               </div>
               <div>
                  <p className="text-lg font-medium">Your shares have increased in value by 5%.</p>
                  <small>5 minutes ago</small>
               </div>
            </div>



         </div>
      </div>
   )
}

export default Notifications
