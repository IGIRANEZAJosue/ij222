
import Chart from "react-apexcharts"

const PieChart = () => {

   const options = {
      labels: ["Paid", "Unpaid"],
      colors: ["#00bfa6", "#EA868F"],
      
      legend: {
         position: "right"
      },

      dataLabels: {
         enabled: false,
      },

      stroke: {
         show: true,
         width: 0,
      },

   }

   const series = [60, 40]

   return (
      <div className="bg-white h-[390px] p-[16px] rounded-2xl ">

         <div className="flex items-start justify-between mb-10  border-b-2 border-[#828282]/20">
            <span className=" flex flex-col items-start justify-between gap-[2px] pb-4">
               <p className=" text-[#828282] text-[20px] font-semibold ">LOANS</p>
               <h1 className=" text-[24px] text-[#0B1354] font-semibold ">$5,987.34</h1>
               <p className=" text-sm font-light">January</p>
            </span>
            
            <button className="flex items-center gap-4 text-[16px] font-medium bg-[#F0F2F5] px-5 py-[6px] rounded-lg">
               Jan
               <i className="fa-solid fa-chevron-down text-[14px]"></i>
            </button>

         </div>


         <Chart
            series={series}
            options={options}
            type="pie"
            height={400}
            width="100%"

         >

         </Chart>
      </div>
   )
}

export default PieChart
