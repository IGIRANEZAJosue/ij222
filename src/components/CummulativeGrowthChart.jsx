import React from 'react'
import Chart from "react-apexcharts"


const CummulativeGrowthChart = () => {
   
   const series = [
      {
         name: "Members",
         data: [210, 410, 690, 920, 1220, 1500],
         color: "#6C63FF",
      }
   ];

   const options = {
     
      xaxis: {
         categories: ['2017', '2018', '2019', '2020', '2022', '2023']
      },
      dataLabels: {
         enabled: false,
      },

      plotOptions: {
         bar: {
           borderRadius: 4,
           horizontal: true,
         }
      },
      stroke: {
         show: true,
         width: 6,
         colors: ['transparent']
      },

   }


   
   return (
      <div className="bg-white p-4 h-[400px] rounded-2xl">

         <span>
            <p className="text-gray-800">Cummulative growth</p>
            <h1 className=" text-[32px] text-[#0B1354] font-semibold ">207,388</h1>
         </span>
         
         <Chart 
            options={options}
            series={series}
            type='bar'
            height="300"
            width="100%"
         />

      </div>
   )
}

export default CummulativeGrowthChart
