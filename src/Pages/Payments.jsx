import React from 'react'
import PaymentCards from '../components/PaymentCards'

const Payments = () => {
   return (
      <div className="p-4 w-[83vw] " >
         <h1 className='text-4xl font-semibold mb-4 '>Payments</h1>
         <PaymentCards />
      </div>
   );   
}

export default Payments
