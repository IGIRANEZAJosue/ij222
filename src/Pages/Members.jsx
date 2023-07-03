import DashboardHeader from "../components/DashboardHeader"
import MemberList from "../components/MemberList"


const Members = () => {
   return (
      <div className='font-Poppins text-gray-900 w-[83vw] p-5  bg-[#f0f2f5]'>
         <DashboardHeader page="Members" />

        <MemberList />

      </div>
   )
}

export default Members
