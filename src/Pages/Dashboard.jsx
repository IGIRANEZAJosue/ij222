import { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import Goals from '../components/Goals';
import DashboardHeader from '../components/DashboardHeader';
import MonthlyIncomeChart from '../components/MonthlyIncomeChart';
import BarChart from '../components/BarChart';


const Dashboard = () => {
   
   return (
      <>
         <div className='font-Poppins text-gray-900 w-[82vw] p-4 overflow-hidden  bg-[#f0f2f5]'>
           
            <DashboardHeader page="Dashboard" />

            <Cards />

            <div className=" flex items-center gap-6 py-6">
               <div className=" w-1/3">
                  <BarChart />
               </div>

               <div className=" w-2/3">
                  <BarChart />
               </div>
            
            </div>

            <Goals />

         </div>

      </>
    
   )
}

export default Dashboard;
