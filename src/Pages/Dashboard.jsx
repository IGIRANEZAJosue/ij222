import { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import Goals from '../components/Goals';
import DashboardHeader from '../components/DashboardHeader';


const Dashboard = () => {
   
   return (
      <>
         <div className='font-Poppins text-gray-900 w-[83vw] p-5  bg-[#f0f2f5]'>
           
            <DashboardHeader page="Dashboard" />

            <Cards />
            <Goals />

         </div>

      </>
    
   )
}

export default Dashboard;
