import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import PaymentsList from '../components/PaymentsList';

const Payments = () => {

   return (
      <div className="p-4 w-[82vw] flex flex-col gap-4 " >
         
         <DashboardHeader page="Payments" />

         <PaymentsList />

      </div>
   );   
}

export default Payments
