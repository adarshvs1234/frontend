import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex text-sm justify-between  pr-4 ' >

    <div className='font-semibold '>
        ExpTracker.
    </div >

     <div className=''>
       Overview
     </div>

     <div  className=''>
        Transactions
    </div>

    <div className=''    >
        Transfers
    </div>
    <div className=''>
        Wallets
    </div>
</div>
    <hr  />
    </>
  )
}

export default Navbar
