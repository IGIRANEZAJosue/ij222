import React, { useState } from 'react'


const Dropdown = () => {

   const [isOpen, setIsOpen] = useState(false);

   const ibimina = ["Maranatha", "Nyungura", "Koperative"]


   return (
      <div className=" relative flex flex-col justify-end items-end z-30 ">
         <button onClick={() => {setIsOpen(!isOpen)}} className=" flex items-center justify-center w-12 h-12 bg-primaryCol/20 rounded-xl hover:outline outline-3 active:outline">
            <h1 className=" font-bold text-textBlack text-[20px]">M</h1>
         </button>

         {isOpen && (
            <div className="absolute top-14 flex flex-col justify-start items-start gap-2 px-2 py-2 bg-white border-[1px] shadow-lg drop-shadow-lg border-gray-900/20 text-gray-800 rounded-xl ">
              
               {ibimina.map((item, i) => (
                  <span className="py-1 pl-3 w-[160px] font-medium hover:bg-primaryCol/20 border-l-transparent hover:border-primaryCol border-l-4 duration-300 cursor-pointer rounded-r-lg  " >
                     <h4>{item}</h4>
                  </span>
               ))}

            </div>
         )}

      </div>
   )
}

export default Dropdown