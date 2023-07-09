
import Goals from '../components/Goals';
import DashboardHeader from '../components/DashboardHeader';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import AnalyticsCards from '../components/AnalyticsCards';
import Provinces from '../components/Provinces';
import MemberGrowthChart from '../components/MemberGrowthChart';
import CummulativeGrowthChart from '../components/CummulativeGrowthChart';


const Dashboard = () => {
   
   return (
      <>
         <div className='font-Poppins text-gray-900 w-[82vw] p-4 overflow-hidden  bg-[#f0f2f5] mb-12'>
           
            <DashboardHeader page="Dashboard" />

            <AnalyticsCards />

            <div className=" flex items-center gap-6 py-6">
               <div className=" w-1/3">
                  <PieChart />
               </div>

               <div className=" w-2/3">
                  <BarChart />
               </div>
            </div>

            <div className="flex items-center gap-6">
            
               <div className=" w-2/3 ">
                  {/*<LineChart /> */}
                  hello
               </div>
               <div className=" w-1/3 ">
                  <Provinces />
               </div>

            </div>

            <div className="flex items-center gap-6 mt-6">
               <div className=" w-1/3 ">
                  <CummulativeGrowthChart />
               </div>
               <div className="w-2/3">
                  <MemberGrowthChart />
               </div>
            </div>

            <Goals />

         </div>

      </>
    
   )
}

export default Dashboard;
