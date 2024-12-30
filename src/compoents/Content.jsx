import React  from 'react'


const Content = () => {

    
  return (
    <>
    <div className='bg-red-600 '>
        <div className='flex mt-2 w-full justify-between'>
            <div className='font-semibold border border-1'> 
                Dashboard
            </div>

        <div className='text-end border border  text-sm  '>
            +Add Transaction
        </div>
       

    </div>

    <div className='flex pt-6 pl-2  text-sm  pl-9'>
       <div className='border border-black h-12 pr-5 pl-2 '>
       Current Wallet Balance
       </div>
       <div className='border border-black h-12 pl-8 pr-8'>
        Total Income 
       </div>
       <div className='border border-black h-12 pl-8 pr-8'>
        Total Expense
       </div>
    </div>

    <div className='pt-3 text-start pr-5 text-sm flex'>
        <div >
          <span> Recent Transactions </span> 
          <h6>Transactions will be displayed here</h6>
        </div>
       
</div>
    {/* <div className='pl-2'>
        Expenditure
    </div> */}

    </div>

<div className='text-end pr-8 text-sm '>
Graph
</div>

</>


  
  )
}
export default Content;
