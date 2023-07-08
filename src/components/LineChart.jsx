import React from 'react'
import Chart from 'react-apexcharts'

const LineChart = () => {

   const series = [
      {
         name: "Contributions",
         data: [70, 200, 432, 290, 122, 352],
         color: "#165BAA",
      },
      {
         name: "Loans",
         data: [300, 350, 232, 132, 422, 200],
         color: "#A155B9",
      },
      {
         name: "Loan Payments",
         data: [210, 100, 210, 400, 220, 490],
         color: "#F765A3",
      }
   ];
   
   const options = {
     
      xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      stroke: {
         show: true,
         width: 3,
         colors: ['transparent']
      },

      dataLabels: {
         enabled: false,
      },

   }


   return (
      <div className=" bg-white p-4 rounded-2xl">

         <div className="flex items-start justify-between border-b-2 border-[#828282]/20">
            <span className=" flex flex-col items-start justify-between gap-[2px] pb-4">
               <p className=" text-[#828282] text-[20px] font-semibold ">REVENUE</p>
               <h1 className=" text-[24px] text-[#0B1354] font-semibold ">$5,987.34</h1>
               <p className=" text-sm font-light">6 months</p>
            </span>
         </div>

         <Chart 
            options={options}
            series={series}
            type='line'
            height="300"
            width="100%"
         />
      </div>
   )
}

export default LineChart
