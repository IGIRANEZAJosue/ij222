import React from 'react'
import PaymentCards from '../components/PaymentCards'

const Payments = () => {

   
   const info = [
      {
          id: 1,
          action: "Paid a Loan",
          amount: 600,
          date: "09-04-2023",
          status: "Pending"
      },
      {
          id: 2,
          action: "Sent money to IGIRANEZA",
          amount: 250,
          date: "19-04-2023",
          status: "Confirmed"
      },
      {
          id: 3,
          action: "Recieved a Loan",
          amount: 4500,
          date: "22-04-2023",
          status: "Confirmed"
      },
      {
          id: 4,
          action: "Made a contribution",
          amount:340,
          date: "29-04-2023",
          status: "Confirmed"
      },
      {
          id: 5,
          action: "Made a contribution",
          amount:340,
          date: "29-04-2023",
          status: "Confirmed"
      },
      {
          id: 6,
          action: "Made a contribution",
          amount:340,
          date: "29-04-2023",
          status: "Confirmed"
      },
  ];

   return (
      <div className="p-4 w-[83vw] flex flex-col gap-4 " >
         <h1 className='text-4xl font-semibold '>Payments</h1>
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
                  
                  <div>
                     {info.map((item) => (
                        <div key={item.id} className="flex">
                           <p className="flex-[3]">{item.action}</p>
                           <p className="flex-1 text-end">{item.date}</p>
                           <p className="flex-1 text-end">${item.amount}</p>
                           <p className="flex-1 text-end text-primary">{item.status}</p>
                        </div>
                     ))}
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
