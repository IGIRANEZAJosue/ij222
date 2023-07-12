import React from 'react'

const PaymentsList = () => {

   const paymentInfo = [{
      "id": 1,
      "fullName": "Frederico McCroary",
      "transaction": "Declined due to insufficient funds.",
      "date": "05/02/2023",
      "time": "4:38 PM",
      "amount": "$1132.06",
      "status": "Cancelled"
    }, {
      "id": 2,
      "fullName": "Michal Deverille",
      "transaction": "Declined due to insufficient funds.",
      "date": "10/01/2023",
      "time": "2:50 PM",
      "amount": "$140.86",
      "status": "Cancelled"
    }, {
      "id": 3,
      "fullName": "Suzanna Breadmore",
      "transaction": "Made a payment of $50.",
      "date": "02/07/2023",
      "time": "6:25 PM",
      "amount": "$791.28",
      "status": "Completed"
    }, {
      "id": 4,
      "fullName": "Teodoor Alty",
      "transaction": "Declined due to insufficient funds.",
      "date": "04/01/2023",
      "time": "7:37 PM",
      "amount": "$1535.25",
      "status": "Completed"
    }, {
      "id": 5,
      "fullName": "Carny Emmot",
      "transaction": "Payment received for $100.",
      "date": "26/02/2023",
      "time": "4:34 PM",
      "amount": "$1902.33",
      "status": "Completed"
    }, {
      "id": 6,
      "fullName": "Patrice Ruggles",
      "transaction": "Payment received for $100.",
      "date": "26/02/2023",
      "time": "10:08 AM",
      "amount": "$245.35",
      "status": "In progress"
    }, {
      "id": 7,
      "fullName": "Arda Lang",
      "transaction": "Payment received for $100.",
      "date": "02/02/2023",
      "time": "1:01 PM",
      "amount": "$1595.10",
      "status": "Cancelled"
    }, {
      "id": 8,
      "fullName": "Alyse Harrap",
      "transaction": "Refund processed for $25.",
      "date": "24/12/2022",
      "time": "3:40 AM",
      "amount": "$985.38",
      "status": "Completed"
    }, {
      "id": 9,
      "fullName": "Cathi Joy",
      "transaction": "Declined due to insufficient funds.",
      "date": "11/02/2023",
      "time": "2:44 PM",
      "amount": "$353.37",
      "status": "Cancelled"
    }, {
      "id": 10,
      "fullName": "Jewel Hully",
      "transaction": "Made a payment of $50.",
      "date": "04/02/2023",
      "time": "9:23 AM",
      "amount": "$1446.15",
      "status": "Completed"
    }, {
      "id": 11,
      "fullName": "Gard Byas",
      "transaction": "Payment received for $100.",
      "date": "07/06/2023",
      "time": "11:21 PM",
      "amount": "$357.89",
      "status": "Cancelled"
    }, {
      "id": 12,
      "fullName": "Lucas Reis",
      "transaction": "Transaction cancelled by customer.",
      "date": "13/01/2023",
      "time": "3:35 AM",
      "amount": "$1634.41",
      "status": "Completed"
    }, {
      "id": 13,
      "fullName": "Manuel Shepton",
      "transaction": "Declined due to insufficient funds.",
      "date": "28/02/2023",
      "time": "8:00 AM",
      "amount": "$293.41",
      "status": "Completed"
    }, {
      "id": 14,
      "fullName": "Viviyan Landells",
      "transaction": "Payment received for $100.",
      "date": "05/01/2023",
      "time": "7:36 AM",
      "amount": "$1986.72",
      "status": "Completed"
    }, {
      "id": 15,
      "fullName": "Ophelie Chicchelli",
      "transaction": "Transaction cancelled by customer.",
      "date": "26/01/2023",
      "time": "1:04 AM",
      "amount": "$1563.11",
      "status": "Completed"
    }, {
      "id": 16,
      "fullName": "Sandie Po",
      "transaction": "Made a payment of $50.",
      "date": "14/12/2022",
      "time": "6:26 AM",
      "amount": "$683.86",
      "status": "Completed"
    }, {
      "id": 17,
      "fullName": "Sterne Nicholes",
      "transaction": "Payment received for $100.",
      "date": "30/12/2022",
      "time": "12:31 AM",
      "amount": "$943.09",
      "status": "Completed"
    }, {
      "id": 18,
      "fullName": "Ruthie Abramino",
      "transaction": "Made a payment of $50.",
      "date": "17/06/2023",
      "time": "2:38 PM",
      "amount": "$1003.01",
      "status": "Cancelled"
    }, {
      "id": 19,
      "fullName": "Rosamond Apps",
      "transaction": "Payment received for $100.",
      "date": "24/02/2023",
      "time": "12:38 PM",
      "amount": "$1538.95",
      "status": "Cancelled"
    }, {
      "id": 20,
      "fullName": "Allegra Tongue",
      "transaction": "Made a payment of $50.",
      "date": "13/05/2023",
      "time": "1:57 AM",
      "amount": "$1990.48",
      "status": "Cancelled"
    }, {
      "id": 21,
      "fullName": "Toni Spittles",
      "transaction": "Declined due to insufficient funds.",
      "date": "26/04/2023",
      "time": "1:30 PM",
      "amount": "$654.75",
      "status": "Completed"
    }, {
      "id": 22,
      "fullName": "Erwin Streight",
      "transaction": "Made a payment of $50.",
      "date": "06/04/2023",
      "time": "5:41 AM",
      "amount": "$206.40",
      "status": "Completed"
    }, {
      "id": 23,
      "fullName": "Alfie Fotherby",
      "transaction": "Made a payment of $50.",
      "date": "23/05/2023",
      "time": "6:49 PM",
      "amount": "$375.18",
      "status": "Completed"
    }, {
      "id": 24,
      "fullName": "Davin Bowich",
      "transaction": "Payment received for $100.",
      "date": "22/05/2023",
      "time": "7:07 PM",
      "amount": "$1943.95",
      "status": "In progress"
    }, {
      "id": 25,
      "fullName": "Lovell Pero",
      "transaction": "Made a payment of $50.",
      "date": "05/05/2023",
      "time": "4:23 AM",
      "amount": "$101.54",
      "status": "Cancelled"
    }, {
      "id": 26,
      "fullName": "Angela Dewis",
      "transaction": "Transaction cancelled by customer.",
      "date": "25/01/2023",
      "time": "5:02 AM",
      "amount": "$1000.32",
      "status": "Completed"
    }, {
      "id": 27,
      "fullName": "Hendrika Biever",
      "transaction": "Declined due to insufficient funds.",
      "date": "22/03/2023",
      "time": "1:55 AM",
      "amount": "$467.77",
      "status": "In progress"
    }, {
      "id": 28,
      "fullName": "Daron Spire",
      "transaction": "Refund processed for $25.",
      "date": "15/06/2023",
      "time": "3:49 PM",
      "amount": "$1421.17",
      "status": "Completed"
    }, {
      "id": 29,
      "fullName": "Halli Postance",
      "transaction": "Made a payment of $50.",
      "date": "12/01/2023",
      "time": "5:29 AM",
      "amount": "$465.36",
      "status": "Cancelled"
    }, {
      "id": 30,
      "fullName": "Ashly Mathie",
      "transaction": "Refund processed for $25.",
      "date": "07/02/2023",
      "time": "1:08 AM",
      "amount": "$1704.27",
      "status": "Completed"
    }, {
      "id": 31,
      "fullName": "Cesaro Harrower",
      "transaction": "Declined due to insufficient funds.",
      "date": "30/06/2023",
      "time": "9:28 AM",
      "amount": "$1648.00",
      "status": "Completed"
    }, {
      "id": 32,
      "fullName": "Wayne Rubinsaft",
      "transaction": "Transaction cancelled by customer.",
      "date": "31/05/2023",
      "time": "9:46 AM",
      "amount": "$124.96",
      "status": "Completed"
    }, {
      "id": 33,
      "fullName": "Ozzie Tilby",
      "transaction": "Declined due to insufficient funds.",
      "date": "20/02/2023",
      "time": "1:30 PM",
      "amount": "$1393.57",
      "status": "Completed"
    }, {
      "id": 34,
      "fullName": "Shadow McGriffin",
      "transaction": "Payment received for $100.",
      "date": "12/02/2023",
      "time": "12:56 AM",
      "amount": "$660.39",
      "status": "Completed"
    }, {
      "id": 35,
      "fullName": "Lanny Blint",
      "transaction": "Transaction cancelled by customer.",
      "date": "14/06/2023",
      "time": "2:30 PM",
      "amount": "$1694.30",
      "status": "Completed"
    }, {
      "id": 36,
      "fullName": "Ely Midner",
      "transaction": "Payment received for $100.",
      "date": "17/12/2022",
      "time": "1:42 PM",
      "amount": "$291.59",
      "status": "Cancelled"
    }, {
      "id": 37,
      "fullName": "Kamila Station",
      "transaction": "Payment received for $100.",
      "date": "29/04/2023",
      "time": "4:48 AM",
      "amount": "$1302.82",
      "status": "Completed"
    }, {
      "id": 38,
      "fullName": "Sharla Tremonte",
      "transaction": "Declined due to insufficient funds.",
      "date": "09/02/2023",
      "time": "12:43 PM",
      "amount": "$1364.97",
      "status": "In progress"
    }, {
      "id": 39,
      "fullName": "Lorry Brittan",
      "transaction": "Transaction cancelled by customer.",
      "date": "12/05/2023",
      "time": "11:13 PM",
      "amount": "$1845.57",
      "status": "In progress"
    }, {
      "id": 40,
      "fullName": "Hendrick Caccavale",
      "transaction": "Made a payment of $50.",
      "date": "03/05/2023",
      "time": "1:40 AM",
      "amount": "$272.92",
      "status": "Completed"
    }, {
      "id": 41,
      "fullName": "Brigida Outerbridge",
      "transaction": "Declined due to insufficient funds.",
      "date": "09/01/2023",
      "time": "3:58 AM",
      "amount": "$1962.92",
      "status": "Completed"
    }, {
      "id": 42,
      "fullName": "Tabby Consadine",
      "transaction": "Declined due to insufficient funds.",
      "date": "27/05/2023",
      "time": "4:19 AM",
      "amount": "$1694.42",
      "status": "Cancelled"
    }, {
      "id": 43,
      "fullName": "Forster Durn",
      "transaction": "Declined due to insufficient funds.",
      "date": "13/06/2023",
      "time": "10:31 PM",
      "amount": "$1411.47",
      "status": "Completed"
    }, {
      "id": 44,
      "fullName": "Dehlia Hamal",
      "transaction": "Transaction cancelled by customer.",
      "date": "07/02/2023",
      "time": "1:10 PM",
      "amount": "$1048.29",
      "status": "Completed"
    }, {
      "id": 45,
      "fullName": "Kally Rotham",
      "transaction": "Payment received for $100.",
      "date": "22/06/2023",
      "time": "6:48 AM",
      "amount": "$1288.82",
      "status": "Completed"
    }, {
      "id": 46,
      "fullName": "Kikelia Swan",
      "transaction": "Made a payment of $50.",
      "date": "29/03/2023",
      "time": "12:09 PM",
      "amount": "$339.55",
      "status": "Completed"
    }, {
      "id": 47,
      "fullName": "Codi Cordero",
      "transaction": "Payment received for $100.",
      "date": "05/04/2023",
      "time": "2:15 AM",
      "amount": "$1569.61",
      "status": "Completed"
    }, {
      "id": 48,
      "fullName": "Derrek Norree",
      "transaction": "Refund processed for $25.",
      "date": "21/02/2023",
      "time": "9:20 PM",
      "amount": "$885.97",
      "status": "Cancelled"
    }, {
      "id": 49,
      "fullName": "Mollie O'Giany",
      "transaction": "Refund processed for $25.",
      "date": "15/05/2023",
      "time": "5:22 PM",
      "amount": "$1400.87",
      "status": "Cancelled"
    }, {
      "id": 50,
      "fullName": "Simeon Leeming",
      "transaction": "Declined due to insufficient funds.",
      "date": "19/03/2023",
      "time": "11:32 AM",
      "amount": "$937.55",
      "status": "Completed"
    }, {
      "id": 51,
      "fullName": "Mia Byrnes",
      "transaction": "Declined due to insufficient funds.",
      "date": "08/01/2023",
      "time": "9:22 AM",
      "amount": "$884.97",
      "status": "Cancelled"
    }, {
      "id": 52,
      "fullName": "Zola Ramel",
      "transaction": "Made a payment of $50.",
      "date": "20/04/2023",
      "time": "4:34 AM",
      "amount": "$780.19",
      "status": "Cancelled"
    }, {
      "id": 53,
      "fullName": "Dael Hacquard",
      "transaction": "Transaction cancelled by customer.",
      "date": "28/04/2023",
      "time": "5:48 PM",
      "amount": "$392.37",
      "status": "Cancelled"
    }, {
      "id": 54,
      "fullName": "Ancell Hebard",
      "transaction": "Refund processed for $25.",
      "date": "17/12/2022",
      "time": "10:33 PM",
      "amount": "$1681.30",
      "status": "Completed"
    }, {
      "id": 55,
      "fullName": "Hewet Trimble",
      "transaction": "Transaction cancelled by customer.",
      "date": "21/01/2023",
      "time": "10:17 PM",
      "amount": "$783.93",
      "status": "Completed"
    }, {
      "id": 56,
      "fullName": "Lorry MacDavitt",
      "transaction": "Payment received for $100.",
      "date": "19/01/2023",
      "time": "6:40 PM",
      "amount": "$1706.53",
      "status": "Completed"
    }, {
      "id": 57,
      "fullName": "Dorothy Tuite",
      "transaction": "Declined due to insufficient funds.",
      "date": "09/04/2023",
      "time": "12:48 AM",
      "amount": "$1677.92",
      "status": "Cancelled"
    }, {
      "id": 58,
      "fullName": "Ariadne Schorah",
      "transaction": "Made a payment of $50.",
      "date": "21/04/2023",
      "time": "2:27 AM",
      "amount": "$1970.46",
      "status": "Cancelled"
    }, {
      "id": 59,
      "fullName": "Jenelle Ost",
      "transaction": "Transaction cancelled by customer.",
      "date": "23/12/2022",
      "time": "2:55 AM",
      "amount": "$1838.35",
      "status": "Completed"
    }, {
      "id": 60,
      "fullName": "Kalila Coats",
      "transaction": "Payment received for $100.",
      "date": "11/01/2023",
      "time": "7:44 PM",
      "amount": "$668.66",
      "status": "Completed"
    }]

   return (
      <>
         <div class="relative overflow-x-auto rounded-2xl drop-shadow-lg bg-white mb-12 ">

				<div className=" p-4 flex justify-between items-center ">
					<button className="flex items-center gap-3 font-medium bg-[#F0F2F5] px-5 py-2 rounded-md hover:outline outline-2 outline-gray-400">
						<i class="fa-solid fa-clock text-[14px] text-[#828282]"></i>
						<p className=" text-sm">Last 30 days</p>
						<i className="fa-solid fa-chevron-down text-[14px]"></i>
					</button>

               <form className=" flex items-center gap-2 bg-[#f0f2f5] border-2 border-gray-300 px-4 rounded-lg">
                  <button><i class="fa-solid fa-magnifying-glass"></i></button>
                  <input placeholder='Search...' type="text" className=" px-2 py-[6px] w-[320px] text-[14px] bg-transparent outline-none" />
               </form>

			   </div>

            <table class="w-full text-base text-left text-gray-900 dark:text-gray-400 py-6">

               <thead class="text-sm text-gray-900 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 ">
                  <tr>
                        <th scope="col" class="px-4 py-2 w-4">
                          <input type="checkbox" name="checkbox" id="" />
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/5">
                           NAME
                        </th>
                        <th scope="col" class="px-4 py-3 w-1/3">
                           TRANSACTION
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/8">
                           DATE & TIME
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/8">
                           AMOUNT
                        </th>
                        <th scope="col" class="px-6 py-3 w-1/7">
                           STATUS
                        </th>
                  </tr>
               </thead>

               <tbody>
                  {paymentInfo.map((payment) => {
                     return(

                     <tr key={payment.id} class="bg-white text-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 text-sm">
                           <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input type="checkbox" name="checkbox" id="" />
                           </th>
                           <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {payment.fullName}
                           </th>
                           <td class="px-6 py-4 text-black">
                              {payment.transaction}
                           </td>
                           <td class="px-6 py-4">
                              {payment.date} , {payment.time}
                           </td>
                           <td class="px-6 py-4 font-semibold">
                              {payment.amount}
                           </td>
                           {payment.status=="Completed" ? 	
															(<td class="px-6 py-4">
                                             	<span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Confirmed</span>
                                      			</td>) 

															: payment.status=="Cancelled" ? 
																(<td class="px-6 py-4">
																	<span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Cancelled</span>
																</td>)

															:	(<td class="px-6 py-4">
																	<span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Processing</span>
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

export default PaymentsList
