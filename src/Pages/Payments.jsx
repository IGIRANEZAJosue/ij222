import React from 'react'
import PaymentCards from '../components/PaymentCards'
import Transactions from '../components/Transactions';

const Payments = () => {

   return (
      <div className="p-4 w-[83vw] flex flex-col gap-4 " >
         <header className='text-4xl font-semibold '>Payments</header>
         <PaymentCards />
         
         <div className="flex w-full ">
            <div className="flex-[3]">
               <h1 className="font-semibold text-2xl">Transactions</h1>
               <div className="transactions  bg-white drop-shadow-xl p-4 rounded-md ">
                  <span className="title flex font-bold border-b-[1px] border-[#e5e5e5] mb-2">
                     <p className="flex-[3] ">Action</p>
                     <p className="flex-1 text-end">Date</p>
                     <p className="flex-1 text-end">Amount</p>
                     <p className="flex-1 text-end">Status</p>
                  </span>
                  
                  <div className="transactions">
                     <Transactions />
                  </div>    
                     

               </div>
            </div>

            <div className="flex-1">

            </div>
         </div>

      </div>
   );   
}

export default Payments
