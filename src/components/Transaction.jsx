import React from 'react'

const Transaction = () => {
  return (
    <>
        <div className="flex  ">
            <p className="flex-[3]">Sent Money to IGIRANEZA</p>
            <p className="flex-1 text-center">29-4-2023</p>
            <p className="flex-1 text-center">$250</p>
            <p className="flex-1 text-center text-primary">Confirmed</p>
        </div>
        <div className="flex  ">
            <p className="flex-[3]">Sent Money to IGIRANEZA</p>
            <p className="flex-1 text-center">29-4-2023</p>
            <p className="flex-1 text-center">$250</p>
            <p className="flex-1 text-center text-danger">Failed</p>
        </div>
    </>
  )
}

export default Transaction
