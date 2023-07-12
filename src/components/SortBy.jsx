import React, { useState } from 'react'


const SortBy = () => {

   const [isOpen, setIsOpen] = useState(false);

   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"]

   return (
      <div className="relative flex flex-col justify-end items-end z-30">
         <button  onClick={() => {setIsOpen(!isOpen)}} className="flex items-center gap-4 text-[14px] font-medium bg-[#F0F2F5] px-5 py-[6px] rounded-lg hover:outline outline-2 outline-gray-400">
            <p>Jan</p>

            {isOpen ? (<i class="fa-solid fa-chevron-up text-[14px] "></i>)
            : (<i className="fa-solid fa-chevron-down text-[14px]"></i>)
            
            }
            
         </button>

         {isOpen && (
            <div className="absolute top-10 flex flex-col justify-start items-start gap-2 px-2 py-2 bg-white border-[1px] shadow-lg drop-shadow-lg border-gray-900/20 text-gray-800 rounded-xl ">
              
               {months.map((item, i) => (
                  <span className="py-1 pl-3 pr-5 font-medium hover:bg-primary/20 border-l-transparent hover:border-primary border-l-4 duration-300 cursor-pointer rounded-r-lg  " >
                     <h4>{item}</h4>
                  </span>
               ))}

            </div>
         )}



      </div>
   )
}

export default SortBy