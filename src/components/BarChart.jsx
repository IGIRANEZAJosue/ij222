import React from 'react'
import Chart from "react-apexcharts"

const BarChart = () => {

   const series = [
      {
         name: "Revenue",
         type: "column",
         data: [100, 200, 232, 332, 422, 352, 380, 460],
         color: "#00bfa6",
      },
      {
         name: "Loans",
         type: "column",
         data: [110, 250, 310, 400, 410, 490, 450, 350],
         color: "#1F2A37",
      }
   ];
   
   const options = {
     
      xaxis: {
         categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
       },

      dataLabels: {
         enabled: false,
      },

      stroke: {
         show: true,
         width: 4,
         colors: ['transparent']
      },

      plotOptions: {
         bar: {
           borderRadius: 4,
           columnWidth: '55%',
         }
      }

   }




   return (

      <div className=" bg-white p-4 rounded-2xl">
         <Chart 
            options={options}
            series={series}
            type='bar'
            height="360"
            width="100%"
         />
      </div>
      
   )
}

export default BarChart
