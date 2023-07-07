
import DashboardHeader from '../components/DashboardHeader';
import AnalyticsCards from '../components/AnalyticsCards';
import PaymentsList from '../components/PaymentsList';
import LoanList from '../components/LoanList';

const Loans = () => {
   return (
      <div className='p-4 w-[82vw]'>
      
         <DashboardHeader page="Loans" />

         <AnalyticsCards />

         <LoanList />

      </div>
   )
}

export default Loans;
