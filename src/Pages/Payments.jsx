import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import MemberList from '../components/MemberList';

const Payments = () => {

   return (
      <div className="p-4 w-[82vw] flex flex-col gap-4 " >
         
         <DashboardHeader page="Payments" />

         <MemberList />

      </div>
   );   
}

export default Payments
