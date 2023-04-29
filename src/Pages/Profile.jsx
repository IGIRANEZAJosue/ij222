
import ProfileInfo from '../components/ProfileInfo'

const Profile = () => {
   return (
      <div className='w-[83vw] p-4'>
         <h1 className=" text-4xl font-semibold mb-4 ">Profile</h1>
         <p className="flex items-center gap-2 mb-4">Account Status:<span className="py-1 px-3 bg-primary/20 text-primary rounded-lg">Active</span></p>
         <div className="flex gap-16">
            <img src="images/undraw_profile_pic.svg" alt="Profile Pic" />
            <ProfileInfo />
         </div>
      </div>
   )
}

export default Profile
