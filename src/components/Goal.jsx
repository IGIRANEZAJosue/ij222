import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Goal = ({percentage, color, name, isComplete}) => {
   return (
      <div className=" flex-1 flex flex-col justify-center items-center gap-8 py-8 rounded-2xl bg-white"> 
         <h2 className=" font-semibold text-[#828282] text-[32xpx]">{name}</h2>
         
         {isComplete ?  <span className=" bg-green-200 text-green-900 font-medium text-[16px] px-8 py-3 rounded-xl ">
                           <p>Completed</p>
                        </span> 
            :  <span className="flex items-center">
                  <h1 className=" font-semibold text-[32px]">$5,987</h1> 
                  <p className=" text-sm">/7000</p>
               </span>
         }
         
         <span className=" w-28" >
            <CircularProgressbarWithChildren value={percentage} strokeWidth={10} styles={buildStyles({
               pathColor: `${color}`,
            })} >
               <h1 className=" font-bold text-[28px] text-[#1F2A37] ">{percentage}%</h1>
            </CircularProgressbarWithChildren>
         </span>
               
      </div>
   )
}

export default Goal