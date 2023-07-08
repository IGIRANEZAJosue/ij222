import React from 'react'
import Chart from "react-apexcharts"

const MemberGrowthChart = () => {

   const series = [
      {
         name: "Members",
         data: [210, 100, 210, 400, 290, 490, 390, 420],
         color: "#00bfa64d",
      }
   ];

   const options = {
     
      xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' , 'Jul' , 'Aug']
      },
      dataLabels: {
         enabled: false,
      },
      
      stroke: {
         curve: 'smooth',
         show: true,
         width: 3,
         colors: ['#00BFA6']
      },

   }




   return (
      <div className="bg-white p-4 rounded-2xl h-[400px]">
         
         <h1 className="font-bold text-[24px] text-gray-800">Member Growth</h1>
         
         <Chart 
            options={options}
            series={series}
            type='area'
            height="300"
            width="100%"
         
         />

      </div>
   )
}

export default MemberGrowthChart
