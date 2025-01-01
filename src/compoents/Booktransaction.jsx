import React from 'react'

const Booktransaction = () => {
  return (
   <div className='bg-red-300 h-screen'> 
    <div className='text-center'>
    Transaction
    </div>

<div className='flex justify-center' >
        
        
      <table className='table-auto border-collapse border border-gray-300  text-left ml-1 mr-1 mt-6'>
        <tr>
          <th className='border border-white px-1 py-1'>Date</th>
          <th className='border border-white px-1 py-1'>Amount</th>
            <th className='border border-white px-1 py-1'>Description</th>
          <th  className='border border-white px-1 py-1'>Type</th>
        </tr>

        <tr>
          <td  className='border border-white px-1 py-1'>1-12-2024</td>
         <td  className='border border-white px-1 py-1'>300</td>
        <td  className='border border-white px-1 py-1'>Novel</td>
         <td  className='border border-white px-1 py-1'>Expense</td>
        </tr>

        
        <tr>
          <td  className='border border-white px-1 py-1'>5-12-2024</td>
         <td  className='border border-white px-1 py-1'>400</td>
        <td  className='border border-white px-1 py-1'>Fiction</td>
         <td  className='border border-white px-1 py-1'>Expense</td>
        </tr>


      </table>
    </div>
    </div>
    
  )
}

export default Booktransaction
