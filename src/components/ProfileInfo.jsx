import React from 'react'

const ProfileInfo = () => {
   return (
      <div className="flex gap-16">
         <div className="flex flex-col gap-4">
            <span>
               <p className="font-semibold text-xl">Full Name</p>
               <p>Josue IGIRANEZA</p>
            </span>
            <span>
               <p className="font-semibold text-xl">Gender</p>
               <p>Male</p>
            </span>
            <span>
               <p className="font-semibold text-xl">Email</p>
               <p>igiranezaj28@gmail.com</p>
            </span>
         </div>

         <div className="flex flex-col gap-4">
            <span>
               <p className="font-semibold text-xl">National ID</p>
               <p>1200280067228063</p>
            </span>
            <span>
               <p className="font-semibold text-xl">Date of Birth</p>
               <p>22-06-2002</p>
            </span>
            <span>
               <p className="font-semibold text-xl">Phone Number</p>
               <p>+250784558832</p>
            </span>
         </div>

      </div>
   )
}

export default ProfileInfo;
