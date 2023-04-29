import React from 'react'
import PaymentCards from '../components/PaymentCards'
import Transaction from '../components/Transaction';

const Payments = () => {
   return (
      <div className="p-4 w-[83vw] flex flex-col gap-4 " >
         <h1 className='text-4xl font-semibold '>Payments</h1>
         <PaymentCards />
         
         <div className="flex w-full ">
            <div className="flex-[3]">
               <h1 className="font-semibold text-2xl">Transactions</h1>
               <div className="transactions  bg-white drop-shadow-xl p-3 rounded-md ">
                  <span className="title flex font-bold border-b-[1px] border-[#e5e5e5]">
                     <p className="flex-[3] ">Action</p>
                     <p className="flex-1 text-center">Date</p>
                     <p className="flex-1 text-center">Amount</p>
                     <p className="flex-1 text-center">Status</p>
                  </span>
                  <Transaction />   
                     

               </div>
            </div>

            <div className="flex-1">

            </div>
         </div>

      </div>
   );   
}

export default Payments
