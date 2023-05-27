
import ProfileInfo from '../components/ProfileInfo'

const Profile = () => {
   return (
      <div className='w-[83vw] p-4'>
      <header className=" text-4xl font-semibold mb-4 ">Profile</header>
         <div className="flex">
            <div className="flex-[5]"> 
               <p className="flex items-center gap-2 mb-4">Account Status:<span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Active</span></p>
               <div className="flex gap-16">
                  <img src="images/undraw_profile_pic.svg" alt="Profile Pic" />
                  <ProfileInfo />
               </div>
            </div>

            <div className="flex-[2] mr-8 p-4 flex flex-col gap-2">
                  <h1 className="font-bold text-[24px]">Analytics</h1>
                  <span className="w-[100%] flex justify-between ">
                     <p>Total loans taken (29)</p>
                     <p className="font-semibold">$5400</p>
                  </span>
                  <span className="w-[100%] flex justify-between">
                     <p>Total Contribuions (23)</p>
                     <p className="font-semibold">$740</p>
                  </span>
                  <span className="w-[100%] flex justify-between">
                     <p>Total Shares (500)</p>
                     <p className="font-semibold">$2500</p>
                  </span>
            </div>
         </div>
         {/*Badges*/}

      </div>
   )
}

export default Profile
