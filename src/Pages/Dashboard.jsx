import { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import Goals from '../components/Goals';


const Dashboard = () => {
   
   return (
      <>
         <div className='font-Poppins text-gray-900 w-[83vw] p-4  bg-[#f0f2f5]'>
           
            <header className="flex justify-between pb-4">
               <h1 className="text-3xl font-bold">Dashboard</h1>
               <div>

               </div>
            </header>

            <Cards />
            <Goals />

         </div>

      </>
    
   )
}

export default Dashboard;
