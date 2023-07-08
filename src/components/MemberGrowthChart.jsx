import React from 'react'
import Chart from "react-apexcharts"

const MemberGrowthChart = () => {
   return (
      <div>
         
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

export default MemberGrowthChart
