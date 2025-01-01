import React from 'react'

const Transactionpage = () => {
  return (
    <div className='  mt-1 bg-red-300  h-screen ml-1 mr-1 ' >
    <div className='flex justify-center pt-2'>
      <h1 className='text-center border-2 border-black rounded p-1 w-64  '>Transactions</h1>
      
    </div>
    <br />


      <div className='flex justify-center'>
      <table className='table-auto border-collapse border border-gray-300  text-left ml-1 mr-1 '>
        <tr>
          <th className='border border-white px-1 py-1'>Date</th>
          <th className='border border-white px-1 py-1'>Amount</th>
          <th className='border border-white px-1 py-1'>Category</th>
          <th className='border border-white px-1 py-1'>Description</th>
          <th  className='border border-white px-1 py-1'>Type</th>
        </tr>

        <tr>
          <td  className='border border-white px-1 py-1'>1-12-2024</td>
         <td  className='border border-white px-1 py-1'>300</td>
         <td  className='border border-white px-1 py-1'>Travel</td>
         <td  className='border border-white px-1 py-1'>Hotel</td>
         <td  className='border border-white px-1 py-1'>Expense</td>
        </tr>


      </table>
      </div>

    
    {/* <div className='text-xs pl-2' >
        Transaction 1
      </div>


    <div className='pl-1 border border text-xs ml-1 mr-1 w-40 p-2'>
     
    <div className=''>
      Amount   :1000
    </div>
    <hr />
      <div >
      Category  : Travel
      </div>
    <hr />
      <div>
      Description : Hotel
      </div>

    <hr />
      <div>
      Type : Expense
      </div>

</div>

 
<div className='text-xs pt-1 ' >
        Transaction 2
      </div>

    <div className='pl-1 border border text-xs ml-1 mr-1 mt-2 w-40 p-2 '>
    <div className=''>
      Amount :200
    </div>
    <hr />
      <div >
      Category : Food
      </div>
    <hr />
      <div>
      Description : Breakfast
      </div>

      <hr />

      <div>
      Type : Expense
      </div>


</div>

 */}




    </div>
    
  )
}

export default Transactionpage
