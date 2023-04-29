import React from 'react'

const Transactions = () => {

    const info = [
        {
            id: 1,
            action: "Paid a Loan",
            amount: 600,
            date: "09-04-2023",
            status: "Failed"
        },
        {
            id: 2,
            action: "Sent money to IGIRANEZA",
            amount: 250,
            date: "19-04-2023",
            status: "Pending"
        },
        {
            id: 3,
            action: "Recieved a Loan",
            amount: 4500,
            date: "22-04-2023",
            status: "Pending"
        },
        {
            id: 4,
            action: "Made a contribution",
            amount:340,
            date: "29-04-2023",
            status: "Confirmed"
        },
        {
            id: 5,
            action: "Made a contribution",
            amount:340,
            date: "29-04-2023",
            status: "Confirmed"
        },
        {
            id: 6,
            action: "Made a contribution",
            amount:340,
            date: "29-04-2023",
            status: "Confirmed"
        },
    ];
  

  return (
    <div>
        {info.map((item) => (
            <div key={item.id} className="flex">
                <p className="flex-[3]">{item.action}</p>
                <p className="transaction-item">{item.date}</p>
                <p className="transaction-item">${item.amount}</p>
                <p className={
                    item.status == "Failed" 
                        ? "transaction-item text-danger" 
                        : item.status == "Pending" 
                        ? "transaction-item text-[#a3e635]" 
                        : "transaction-item text-primary" 
                    }>{item.status}</p>
            </div>
        ))}
    </div>
  )
}

export default Transactions;    
