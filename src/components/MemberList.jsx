import React from 'react'

const MemberList = () => {
   
   const data= [{
      "id": 1,
      "fullName": "Dierdre Opy",
      "email": "dopy0@last.fm",
      "year": 2009,
      "contributions": "$3145.20",
      "duty": "Admin"
    }, {
      "id": 2,
      "fullName": "Russ Neicho",
      "email": "rneicho1@yolasite.com",
      "year": 1997,
      "contributions": "$2368.76",
      "duty": "Member"
    }, {
      "id": 3,
      "fullName": "Antone Tidder",
      "email": "atidder2@soup.io",
      "year": 1987,
      "contributions": "$4239.32",
      "duty": "Member"
    }, {
      "id": 4,
      "fullName": "Ali Tulloch",
      "email": "atulloch3@ebay.com",
      "year": 2011,
      "contributions": "$867.23",
      "duty": "Member"
    }, {
      "id": 5,
      "fullName": "Armstrong Crosfield",
      "email": "acrosfield4@goodreads.com",
      "year": 2001,
      "contributions": "$877.13",
      "duty": "Admin"
    }, {
      "id": 6,
      "fullName": "Delia Prettyjohn",
      "email": "dprettyjohn5@google.pl",
      "year": 2002,
      "contributions": "$1674.34",
      "duty": "Member"
    }, {
      "id": 7,
      "fullName": "Estell Savidge",
      "email": "esavidge6@printfriendly.com",
      "year": 1998,
      "contributions": "$4661.45",
      "duty": "Member"
    }, {
      "id": 8,
      "fullName": "Temp Frenchum",
      "email": "tfrenchum7@howstuffworks.com",
      "year": 2011,
      "contributions": "$2961.10",
      "duty": "Member"
    }, {
      "id": 9,
      "fullName": "Town Tree",
      "email": "ttree8@mozilla.org",
      "year": 2005,
      "contributions": "$1104.48",
      "duty": "Member"
    }, {
      "id": 10,
      "fullName": "Edgard Hagston",
      "email": "ehagston9@economist.com",
      "year": 1999,
      "contributions": "$3459.06",
      "duty": "Member"
    }, {
      "id": 11,
      "fullName": "Blondy Maleby",
      "email": "bmalebya@auda.org.au",
      "year": 2003,
      "contributions": "$4692.96",
      "duty": "Member"
    }, {
      "id": 12,
      "fullName": "Enid Feldklein",
      "email": "efeldkleinb@bigcartel.com",
      "year": 1989,
      "contributions": "$781.04",
      "duty": "Member"
    }, {
      "id": 13,
      "fullName": "Ignaz Gorch",
      "email": "igorchc@yandex.ru",
      "year": 2012,
      "contributions": "$1528.36",
      "duty": "Member"
    }, {
      "id": 14,
      "fullName": "Noelyn Brumfield",
      "email": "nbrumfieldd@shinystat.com",
      "year": 2010,
      "contributions": "$1197.12",
      "duty": "Member"
    }, {
      "id": 15,
      "fullName": "Anderea Screaton",
      "email": "ascreatone@ibm.com",
      "year": 2008,
      "contributions": "$4225.92",
      "duty": "Member"
    }, {
      "id": 16,
      "fullName": "Faustina Powton",
      "email": "fpowtonf@tripod.com",
      "year": 2010,
      "contributions": "$2731.50",
      "duty": "Member"
    }, {
      "id": 17,
      "fullName": "Sal Vuittet",
      "email": "svuittetg@wikipedia.org",
      "year": 2009,
      "contributions": "$3194.76",
      "duty": "Member"
    }, {
      "id": 18,
      "fullName": "Tally Cunliffe",
      "email": "tcunliffeh@jalbum.net",
      "year": 2008,
      "contributions": "$847.40",
      "duty": "Member"
    }, {
      "id": 19,
      "fullName": "Allegra Prazer",
      "email": "aprazeri@webmd.com",
      "year": 2002,
      "contributions": "$3364.85",
      "duty": "Member"
    }, {
      "id": 20,
      "fullName": "Cookie Rimmer",
      "email": "crimmerj@ning.com",
      "year": 1948,
      "contributions": "$1732.90",
      "duty": "Member"
    }, {
      "id": 21,
      "fullName": "Christophorus Livsey",
      "email": "clivseyk@facebook.com",
      "year": 1989,
      "contributions": "$3143.04",
      "duty": "Member"
    }, {
      "id": 22,
      "fullName": "Alexander Beadman",
      "email": "abeadmanl@opera.com",
      "year": 2010,
      "contributions": "$3108.65",
      "duty": "Member"
    }, {
      "id": 23,
      "fullName": "Callean Dodman",
      "email": "cdodmanm@g.co",
      "year": 2005,
      "contributions": "$2208.11",
      "duty": "Admin"
    }, {
      "id": 24,
      "fullName": "Caryl Bergeon",
      "email": "cbergeonn@usatoday.com",
      "year": 1997,
      "contributions": "$3974.16",
      "duty": "Member"
    }, {
      "id": 25,
      "fullName": "Jarrad Hampstead",
      "email": "jhampsteado@ustream.tv",
      "year": 1998,
      "contributions": "$3169.80",
      "duty": "Member"
    }, {
      "id": 26,
      "fullName": "Cornie Rochester",
      "email": "crochesterp@mac.com",
      "year": 1997,
      "contributions": "$3346.07",
      "duty": "Admin"
    }, {
      "id": 27,
      "fullName": "Emily Holdron",
      "email": "eholdronq@google.cn",
      "year": 2000,
      "contributions": "$2595.00",
      "duty": "Member"
    }, {
      "id": 28,
      "fullName": "Danette Peddar",
      "email": "dpeddarr@ft.com",
      "year": 2006,
      "contributions": "$2561.15",
      "duty": "Member"
    }, {
      "id": 29,
      "fullName": "Vin Standbrook",
      "email": "vstandbrooks@nydailynews.com",
      "year": 1997,
      "contributions": "$1570.36",
      "duty": "Member"
    }, {
      "id": 30,
      "fullName": "Juan Daysh",
      "email": "jdaysht@princeton.edu",
      "year": 2012,
      "contributions": "$2698.27",
      "duty": "Member"
    }, {
      "id": 31,
      "fullName": "Julius Kilminster",
      "email": "jkilminsteru@godaddy.com",
      "year": 1995,
      "contributions": "$4912.86",
      "duty": "Member"
    }, {
      "id": 32,
      "fullName": "Bridgette Caddie",
      "email": "bcaddiev@moonfruit.com",
      "year": 2007,
      "contributions": "$4057.54",
      "duty": "Member"
    }, {
      "id": 33,
      "fullName": "Gill Matzke",
      "email": "gmatzkew@tmall.com",
      "year": 2006,
      "contributions": "$1882.14",
      "duty": "Member"
    }, {
      "id": 34,
      "fullName": "Duke Drewry",
      "email": "ddrewryx@1und1.de",
      "year": 2009,
      "contributions": "$4785.39",
      "duty": "Member"
    }, {
      "id": 35,
      "fullName": "Lucilia Haily",
      "email": "lhailyy@addthis.com",
      "year": 1984,
      "contributions": "$2386.88",
      "duty": "Member"
    }, {
      "id": 36,
      "fullName": "Gwenneth Gutridge",
      "email": "ggutridgez@youtu.be",
      "year": 1993,
      "contributions": "$3606.30",
      "duty": "Member"
    }, {
      "id": 37,
      "fullName": "Joshua Rove",
      "email": "jrove10@diigo.com",
      "year": 2007,
      "contributions": "$1987.10",
      "duty": "Admin"
    }, {
      "id": 38,
      "fullName": "Durand Dykas",
      "email": "ddykas11@vkontakte.ru",
      "year": 2002,
      "contributions": "$3888.02",
      "duty": "Member"
    }, {
      "id": 39,
      "fullName": "Milena Shilburne",
      "email": "mshilburne12@taobao.com",
      "year": 1994,
      "contributions": "$2608.29",
      "duty": "Member"
    }, {
      "id": 40,
      "fullName": "Valina Daglish",
      "email": "vdaglish13@hubpages.com",
      "year": 1987,
      "contributions": "$1980.24",
      "duty": "Member"
    }, {
      "id": 41,
      "fullName": "Kendra Edis",
      "email": "kedis14@edublogs.org",
      "year": 2012,
      "contributions": "$1448.29",
      "duty": "Member"
    }, {
      "id": 42,
      "fullName": "Avram Rosenstein",
      "email": "arosenstein15@loc.gov",
      "year": 1992,
      "contributions": "$3738.84",
      "duty": "Member"
    }, {
      "id": 43,
      "fullName": "Dixie Stoyell",
      "email": "dstoyell16@nyu.edu",
      "year": 2006,
      "contributions": "$866.15",
      "duty": "Member"
    }, {
      "id": 44,
      "fullName": "Buddy Kaley",
      "email": "bkaley17@paginegialle.it",
      "year": 2001,
      "contributions": "$3886.14",
      "duty": "Member"
    }, {
      "id": 45,
      "fullName": "Melissa Matuszinski",
      "email": "mmatuszinski18@patch.com",
      "year": 2010,
      "contributions": "$3076.64",
      "duty": "Member"
    }, {
      "id": 46,
      "fullName": "Kellen Laugherane",
      "email": "klaugherane19@indiegogo.com",
      "year": 2005,
      "contributions": "$1168.48",
      "duty": "Member"
    }, {
      "id": 47,
      "fullName": "Lorelle De Carteret",
      "email": "lde1a@sciencedaily.com",
      "year": 2002,
      "contributions": "$1651.59",
      "duty": "Member"
    }, {
      "id": 48,
      "fullName": "Earl McCarly",
      "email": "emccarly1b@printfriendly.com",
      "year": 1990,
      "contributions": "$1482.96",
      "duty": "Member"
    }, {
      "id": 49,
      "fullName": "Ashia Asaaf",
      "email": "aasaaf1c@flavors.me",
      "year": 2004,
      "contributions": "$965.58",
      "duty": "Member"
    }, {
      "id": 50,
      "fullName": "Tymothy Heckney",
      "email": "theckney1d@issuu.com",
      "year": 1991,
      "contributions": "$2932.75",
      "duty": "Member"
    }]
   
   return (
      <>

         {/*Admins*/}
         <div class="relative overflow-x-auto mb-6 rounded-2xl drop-shadow-lg">

            <div className="flex justify-between items-center bg-white text-gray-800 px-6 py-4 bor">
               <span className="flex items-center gap-5">
                  <i class=" fa-solid fa-user-tie-hair text-[32px]"></i>
                  <h1 className="font-bold text-2xl">Admins</h1>
               </span>

               <button className="flex items-center gap-3 bg-[#f0f2f5] px-6 py-3 rounded-xl">
                  <i class="fa-regular fa-circle-plus text-[20px]"></i>
                  <p className=" text-sm font-medium">Add New Admin</p>
               </button>
            
            </div>

            <table class="w-full text-sm text-left text-gray-600 dark:text-gray-400">

               <thead class="text-sm text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 ">
                  <tr>
                        <th scope="col" class="px-6 py-3 w-6">
                           #
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/4">
                           Full Name
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/4">
                           Email
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/7">
                           SINCE
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
                  
                  {data.map((member) => {
                     
                     if (member.duty === "Admin"){
                        return(
                           <tr key={member.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 {member.id}
                              </th>
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 {member.fullName}
                              </th>
                              <td class="px-6 py-4">
                                 {member.email}
                              </td>
                              <td class="px-6 py-4">
                                 {member.year}
                              </td>
                              <td class="px-6 py-4">
                                 {member.contributions}
                              </td>
                              <td class="px-6 py-4">
                                 {member.duty}
                              </td>
                           </tr>  
                        )
                     } else {return null;}

                  })}
                  
                  
               </tbody>
            </table>
         </div>

         {/*Members */}
         <div class="relative overflow-x-auto rounded-2xl drop-shadow-lg">

            <div className="flex justify-between items-center bg-white text-gray-800 px-6 py-4 bor">
               <span className="flex items-center gap-5">
                  <i class="fa-regular fa-user text-[28px]"></i>
                  <h1 className="font-bold text-2xl">Members</h1>
               </span>

               <button className="flex items-center gap-4 font-medium bg-[#F0F2F5] px-5 py-2 rounded-lg">
                  <p className=" text-sm">Sort by</p>
                  <i className="fa-solid fa-chevron-down text-[14px]"></i>
               </button>
            
            </div>

            <table class="w-full text-sm text-left text-gray-600 dark:text-gray-400">

               <thead class="text-sm text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 ">
                  <tr>
                        <th scope="col" class="px-6 py-3 w-6">
                           #
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/4">
                           Full Name
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/4">
                           Email
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/7">
                           SINCE
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
                  
                  {data.map((member) => {
                     return(

                     <tr key={member.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                           <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {member.id}
                           </th>
                           <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {member.fullName}
                           </th>
                           <td class="px-6 py-4">
                              {member.email}
                           </td>
                           <td class="px-6 py-4">
                              {member.year}
                           </td>
                           <td class="px-6 py-4">
                              {member.contributions}
                           </td>
                           <td class="px-6 py-4">
                              {member.duty}
                           </td>
                        </tr>                     
                     )
                  })}
                  
                  
               </tbody>
            </table>
         </div>

      </>

   )
}

export default MemberList