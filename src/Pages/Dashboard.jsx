import React from 'react'
import Cards from '../components/Cards';
import Reminder from '../components/Reminders';
import { Link } from 'react-router-dom';

const Dashboard = () => {
   return (
      <>
         <div className='font-Poppins flex w-[83vw] '>
            <div className="flex-[4] p-4">
               <h1 className='text-4xl font-semibold mb-2'>Overview</h1>
               <div className="flex justify-around items-center mb-4 bg-primary/20 w-[100%] h-[130px] p-4 rounded-xl font-semibold ">
                  <div>
                     <h5>Welcome back Joseph</h5> 
                     <p>You've paid 80% of your Loans</p>
                  </div>
                  <img className=" -translate-y-6 " src="images/undraw_coding_re_iv62 2.svg" />
               </div>

               {/* Dashboard Center*/}
               <div className="flex items-start gap-4 mb-4 ">
                  <div className=" flex flex-[3] bg-white flex-col h-full px-4 py-2 gap-2 rounded-2xl drop-shadow-xl ">
                     <div className="flex justify-between items-center mb-1 ">
                        <h5 className=" text-lg font-bold ">Recent Transactions</h5>
                        <Link to="/payments"><p className=" flex items-center gap-2 ">More <i class="fa-solid fa-arrow-right-long"></i></p></Link>
                     </div>
                     <span className="flex justify-between">
                        <p>Paid a Loan</p>
                        <p className="font-bold text-lightPurple ">$340</p>
                     </span>
                     <span className="flex justify-between">
                        <p>Made a contribution</p>
                        <p className="font-bold text-primary ">$120</p>
                     </span>
                     <span className="flex justify-between">
                        <p>Paid a Loan</p>
                        <p className="font-bold ">$340</p>
                     </span>
                     <span className="flex justify-between">
                        <p>Sent money to IGIRANEZA</p>
                        <p className="font-bold text-[#F05252]">$1200</p>
                     </span>
                     <span className="flex justify-between">
                        <p>Paid a Loan</p>
                        <p className="font-bold ">$340</p>
                     </span>
                     <span className="flex justify-between">
                        <p>Recieved a loan</p>
                        <p className="font-bold ">$1159</p>
                     </span>
                     
                  </div>

                  <div className=" flex-[4] w-[400px] ">
                     <img className="h-[250px]" src="images/Graph.png"  />
                  </div>
               </div>

               <Cards />

            </div>

            {/*Dashboard Right*/}
            <div className="flex-[1.1] flex flex-col items-center gap-4 bg-[#fff] min-h-[100vh] p-4 ">
               <div className='flex gap-4 items-center font-bold cursor-pointer'>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <p>Logout</p>
               </div>
               <div className="flex flex-col justify-between items-center h-full w-full">
                  <div className=" flex flex-col items-center">
                     <img className="w-32 h-32" src="images/undraw_profile_pic.svg" alt="" />
                     <br />
                     <h1 className="font-semibold ">HAKIZAMUNGU Joseph</h1>
                  </div>
                  <div className="w-[100%] flex flex-col gap-4">
                     <h1 className="flex items-center justify-between font-semibold">Reminders 
                        <i class="fa-regular fa-bell"></i></h1>
                     
                     <Reminder />
                     
                  </div>
                  
               </div>
            </div>

         </div>

      </>
    
   )
}

export default Dashboard;
