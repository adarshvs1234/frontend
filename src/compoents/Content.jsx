import React  from 'react'
import {  useNavigate } from 'react-router-dom';


const Content = () => {

    const navigate = useNavigate()
    
  return (
    <>
    <div className='bg-zinc-500 border-white  border-2'>
        <div className=' mt-2 ml-1  mr-2 justify-between '>
            <div className='font-semibold border border-2 w-full text-center h-6 text-sm text-center rounded'> 
                Dashboard
            </div>

</div>

<div className='w-full  flex justify-end'>
<div className='text-end text-xs mr-2 pl-2 pr-2 border border-black mt-2 w-18 rounded  cursor-pointer'  onClick={()=> navigate('/transaction')}>
  + Add Transaction
        </div>
</div>


    <div className='flex pt-5 pl-2  text-sm  pl-9 pb-2 '>
       <div className='border border-black  border-1 h-12 pr-5 pl-2  text-xs'>
       Current Wallet Balance
       </div>
       <div className='border border-black h-12 pl-8 pr-8 text-xs'>
      Total Income
       </div>
       <div className='border border-black h-12 pl-8 pr-8 text-xs'>
        Total Expense
       </div>



   
    </div>

   </div>

<div className='pt-2'>

</div>

<div className='border-black border bg-neutral-800 flex justify-between h-6 text-xs  text-white'> 

<div className='text-sm border border-white text-xs'>
    Recent Transactions  
</div>


<div className='text-end pr-8 text-sm border border-white text-xs'>
Graph
</div>




</div>

</>


  
  )
}
export default Content;
