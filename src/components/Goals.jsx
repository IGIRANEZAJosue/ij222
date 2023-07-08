
import 'react-circular-progressbar/dist/styles.css';

import Goal from './Goal';


const Goals = () => {

   const revenue = 82;
   const contributions = 68;
   const newMembers = 100;
   const loanPayments = 30;

   return (
      <div className=" flex flex-col gap-2 text-gray-800 mt-8">
         <h1 className=" font-semibold text-[24px]">Goals</h1>

         <div className="goals flex gap-6">
                           
            <Goal percentage={revenue} color="#6C63FF" name="Revenue"/>
            <Goal percentage={contributions} color="#F05252" name="Contributions" />
            <Goal percentage={newMembers} color="#00bfa6" name="New Members" isComplete= {true} />
            <Goal percentage={loanPayments} color="#E3A008" name="Loan Payments" />

         </div>
         
         
      </div>
   )
}

export default Goals