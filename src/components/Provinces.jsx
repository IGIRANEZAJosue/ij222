import React from 'react'

const Provinces = () => {
   return (
      <div className="bg-white p-6 rounded-2xl">

         <h1 className="font-bold text-[24px] mb-4">Revenue by Province</h1>

         <table className=" text-left">
            <thead className="text-[18px] font-semibold">
               <tr>
                  <td scope='col' className=" w-1/3 py-4">Province</td>
                  <td scope='col' className=" w-1/4">Revenue</td>
                  <td scope='col' className=" w-1/4">Status</td>
               </tr>
            </thead>
            <tbody>
               <tr className=" h-[60px]">
                  <td>Kigali City</td>
                  <td className=" font-semibold ">$2500</td>
                  <td className="text-[#6C63FF] font-medium">+20%</td>
               </tr>
               <tr className=" h-[60px] ">
                  <td>Northern Province <br /></td>
                  <td className=" font-semibold ">$1500</td>
                  <td className="text-[#6C63FF] font-medium">+20%</td>
               </tr>
               <tr className=" h-[60px]">
                  <td>Southern Province</td>
                  <td className=" font-semibold ">$200</td>
                  <td className="text-[#6C63FF] font-medium">+20%</td>
               </tr>
               <tr className=" h-[60px]">
                  <td>Western Province</td>
                  <td className=" font-semibold ">$800</td>
                  <td className="text-[#6C63FF] font-medium">+20%</td>
               </tr>
               <tr className=" h-[60px]">
                  <td>Eastern Province</td>
                  <td className=" font-semibold ">$500</td>
                  <td className="text-[#6C63FF] font-medium">+20%</td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}

export default Provinces
