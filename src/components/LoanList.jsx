import React from 'react'

const LoanList = () => {

   const loanList = [{
      "id": 1,
      "fullName": "Kiersten Annon",
      "email": "kannon0@domainmarket.com",
      "amount": "$2513.07",
      "status": "Paused",
      "date": "02/02/2023",
      "time": "16:28"
    }, {
      "id": 2,
      "fullName": "Carolan Bagnold",
      "email": "cbagnold1@weibo.com",
      "amount": "$2955.47",
      "status": "Active",
      "date": "14/08/2022",
      "time": "5:09"
    }, {
      "id": 3,
      "fullName": "Bjorn Jewks",
      "email": "bjewks2@yellowcross.org",
      "amount": "$2779.42",
      "status": "Active",
      "date": "16/11/2022",
      "time": "17:33"
    }, {
      "id": 4,
      "fullName": "Aguie Barck",
      "email": "abarck3@nytimes.com",
      "amount": "$960.78",
      "status": "Completed",
      "date": "13/05/2023",
      "time": "11:04"
    }, {
      "id": 5,
      "fullName": "Hetty Tatersale",
      "email": "htatersale4@eventbrite.com",
      "amount": "$1355.13",
      "status": "Active",
      "date": "17/03/2023",
      "time": "19:27"
    }, {
      "id": 6,
      "fullName": "Larisa Ducham",
      "email": "lducham5@pagesperso-orange.fr",
      "amount": "$1044.98",
      "status": "Active",
      "date": "08/11/2022",
      "time": "0:24"
    }, {
      "id": 7,
      "fullName": "Maurise Giannazzi",
      "email": "mgiannazzi6@hhs.gov",
      "amount": "$1014.19",
      "status": "Active",
      "date": "20/12/2022",
      "time": "2:12"
    }, {
      "id": 8,
      "fullName": "Kip Bedder",
      "email": "kbedder7@disqus.com",
      "amount": "$1391.60",
      "status": "Active",
      "date": "30/04/2023",
      "time": "19:11"
    }, {
      "id": 9,
      "fullName": "Orin Haken",
      "email": "ohaken8@soundcloud.com",
      "amount": "$2674.45",
      "status": "Active",
      "date": "22/06/2023",
      "time": "17:34"
    }, {
      "id": 10,
      "fullName": "Cleveland Saxon",
      "email": "csaxon9@senate.gov",
      "amount": "$2278.06",
      "status": "Active",
      "date": "02/09/2022",
      "time": "5:48"
    }, {
      "id": 11,
      "fullName": "Helaina McGaugan",
      "email": "hmcgaugana@hp.com",
      "amount": "$1550.20",
      "status": "Active",
      "date": "11/11/2022",
      "time": "22:33"
    }, {
      "id": 12,
      "fullName": "Munmro Keher",
      "email": "mkeherb@dell.com",
      "amount": "$2903.87",
      "status": "Active",
      "date": "06/11/2022",
      "time": "15:18"
    }, {
      "id": 13,
      "fullName": "Anny Blagbrough",
      "email": "ablagbroughc@quantcast.com",
      "amount": "$2862.01",
      "status": "Active",
      "date": "20/01/2023",
      "time": "15:55"
    }, {
      "id": 14,
      "fullName": "Nichol McCambrois",
      "email": "nmccambroisd@printfriendly.com",
      "amount": "$2008.93",
      "status": "Active",
      "date": "21/07/2022",
      "time": "12:37"
    }, {
      "id": 15,
      "fullName": "Mick Howship",
      "email": "mhowshipe@youtube.com",
      "amount": "$1010.77",
      "status": "Active",
      "date": "19/11/2022",
      "time": "19:57"
    }, {
      "id": 16,
      "fullName": "Filbert Terrett",
      "email": "fterrettf@blog.com",
      "amount": "$1636.70",
      "status": "Active",
      "date": "27/11/2022",
      "time": "3:55"
    }, {
      "id": 17,
      "fullName": "Brittan Boskell",
      "email": "bboskellg@ihg.com",
      "amount": "$587.44",
      "status": "Active",
      "date": "24/02/2023",
      "time": "11:38"
    }, {
      "id": 18,
      "fullName": "Ethelda Mitchley",
      "email": "emitchleyh@lulu.com",
      "amount": "$845.10",
      "status": "Active",
      "date": "09/09/2022",
      "time": "2:23"
    }, {
      "id": 19,
      "fullName": "Sutton Friedank",
      "email": "sfriedanki@eepurl.com",
      "amount": "$752.09",
      "status": "Active",
      "date": "09/02/2023",
      "time": "16:29"
    }, {
      "id": 20,
      "fullName": "Arlinda Barker",
      "email": "abarkerj@newsvine.com",
      "amount": "$1432.08",
      "status": "Active",
      "date": "05/09/2022",
      "time": "8:28"
    }, {
      "id": 21,
      "fullName": "Stewart Willicott",
      "email": "swillicottk@sakura.ne.jp",
      "amount": "$1847.98",
      "status": "Active",
      "date": "02/06/2023",
      "time": "21:52"
    }, {
      "id": 22,
      "fullName": "Lucian Wolvey",
      "email": "lwolveyl@deliciousdays.com",
      "amount": "$2486.36",
      "status": "Completed",
      "date": "12/09/2022",
      "time": "4:06"
    }, {
      "id": 23,
      "fullName": "Dan Heffer",
      "email": "dhefferm@ted.com",
      "amount": "$2125.58",
      "status": "Completed",
      "date": "07/02/2023",
      "time": "14:58"
    }, {
      "id": 24,
      "fullName": "Sayre Guttridge",
      "email": "sguttridgen@dagondesign.com",
      "amount": "$2373.53",
      "status": "Active",
      "date": "27/03/2023",
      "time": "7:42"
    }, {
      "id": 25,
      "fullName": "Honey Grasha",
      "email": "hgrashao@globo.com",
      "amount": "$2687.41",
      "status": "Active",
      "date": "28/02/2023",
      "time": "21:15"
    }, {
      "id": 26,
      "fullName": "Yevette Dearsley",
      "email": "ydearsleyp@usa.gov",
      "amount": "$1362.33",
      "status": "Active",
      "date": "08/07/2022",
      "time": "9:46"
    }, {
      "id": 27,
      "fullName": "Serge Diggle",
      "email": "sdiggleq@macromedia.com",
      "amount": "$2786.52",
      "status": "Active",
      "date": "14/10/2022",
      "time": "19:54"
    }, {
      "id": 28,
      "fullName": "Lianna Ciciura",
      "email": "lciciurar@princeton.edu",
      "amount": "$2934.88",
      "status": "Active",
      "date": "26/01/2023",
      "time": "7:18"
    }, {
      "id": 29,
      "fullName": "Danya Jasper",
      "email": "djaspers@bing.com",
      "amount": "$2086.58",
      "status": "Active",
      "date": "07/01/2023",
      "time": "22:19"
    }, {
      "id": 30,
      "fullName": "Marylin Kingsnod",
      "email": "mkingsnodt@seattletimes.com",
      "amount": "$2050.14",
      "status": "Active",
      "date": "18/01/2023",
      "time": "11:46"
    }]
   
   return (
      <> 

         <div class="relative overflow-x-auto rounded-2xl drop-shadow-lg bg-white my-6 ">

            <div className=" p-4 flex justify-between items-center ">
               <span className="flex items-center gap-3 font-bold text-[24px] ">
                  <i class="fa-regular fa-circle-dollar"></i>
                  <h1>Active Loans</h1>
               </span>

               <form className=" flex items-center gap-2 bg-[#f0f2f5] border-2 border-gray-300 px-4 rounded-lg">
                  <button><i class="fa-solid fa-magnifying-glass"></i></button>
                  <input placeholder='Search...' type="text" className=" px-2 py-[6px] w-[320px] text-[14px] bg-transparent outline-none" />
               </form>
            </div>

            <table class="w-full text-sm text-left text-gray-600 dark:text-gray-400">

               <thead class="text-sm text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 ">
                  <tr>
                     <th scope="col" class="px-6 py-3 w-6 ">
                        <input type="checkbox" name="checkbox" id="" />
                     </th>
                     <th scope="col" class="px-6 py-3 w-1/6">
                        Name
                     </th>
                     <th scope="col" class="px-6 py-3 w-1/4">
                        Email
                     </th>
                     <th scope="col" class="px-6 py-3 w-1/5">
                        date & time 
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Contributions
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Duty
                     </th>
                  </tr>
               </thead>

               <tbody>
                     
                  {loanList.map((member) => {
                     return(

                     <tr key={member.id} class="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700">
                        
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           <input type="checkbox" name="checkbox" />
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {member.fullName}
                        </th>
                        <td class="px-6 py-4">
                           {member.email}
                        </td>
                        <td class="px-6 py-4">
                           {member.date}, {member.time}
                        </td>
                        <td class="px-6 py-4 font-semibold">
                           {member.amount}
                        </td>

                        {member.status=="Completed" ? 	
                                             (<td class="px-6 py-4">
                                                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Confirmed</span>
                                             </td>) 

                                          :  member.status=="Paused" ? 
                                             (<td class="px-6 py-4">
                                                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Paused</span>
                                             </td>)

                                          :	(<td class="px-6 py-4">
                                                <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Active</span>
                                             </td>) 
                        }
                     </tr>                     
                        
                     )

                     })}
                     
                     
               </tbody>

            </table>

         </div>   
         
      </>
   )
}

export default LoanList
