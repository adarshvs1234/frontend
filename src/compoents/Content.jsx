import { useQuery } from '@tanstack/react-query';
import React  from 'react'
import {  useNavigate } from 'react-router-dom';
import { fetchAmountTransactionAPI, fetchTransactionAPI } from '../services/transactionServices';
import { format } from 'date-fns';
import { fetchCategoryAPI } from '../services/categoryServices';


const Content = () => {

    const navigate = useNavigate()
    

const {data:summarydata} = useQuery({

  queryFn:fetchAmountTransactionAPI,
  queryKey:["fetchAmount"]
})



  const {data} = useQuery({

    queryFn:fetchTransactionAPI,
    queryKey:["recentransaction"]
  })


const {data:categorydata} = useQuery({

  queryFn:fetchCategoryAPI,
  queryKey:["categorylist"]
  
})

const limitedData = data?.slice(0, 2)

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



  {/* {summarydata?.map((amount)=>{ */}



<div className='flex pt-5 pl-2  text-sm  pl-9 pb-2 '>
<div className='border border-black  border-1 h-12 pr-5 pl-2  text-xs'>
Current Wallet Balance
<div   className='text-center pt-1'>
  {summarydata?.balance}
</div>

</div>
<div className='border border-black h-12 pl-8 pr-8 text-xs'>
Total Income
<div    className='text-center pt-1'>
{summarydata?.totalIncome}
</div>

</div>
<div className='border border-black h-12 pl-8 pr-8 text-xs'>
 Total Expense
 <div className='text-center pt-1'>
{summarydata?.totalExpense}
 </div>
</div>

</div>

  {/* })} */}

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




  <div className='flex justify-center cursor-pointer ' onClick={()=>navigate(`/alltransaction`)}>
      <table className='table-auto border-collapse border border-gray-300  text-left ml-1 mr-1 '>
        <tr>
        <th className='border border-white px-1 py-1'>No</th>
          <th className='border border-white px-1 py-1'>Date</th>
         <th className='border border-white px-1 py-1'>Category</th>
          <th className='border border-white px-1 py-1'>Amount</th>
          <th className='border border-white px-1 py-1'>Description</th>
          <th  className='border border-white px-1 py-1'>Type</th>
        </tr>


        {limitedData?.map((transaction,index) => (

        

            <tr key={transaction._id}>
          
            <td   className="border border-white px-1 py-1 ">{index+1 }</td>
            <td className="border border-white px-1 py-1 " > {format(new Date(transaction.createdAt), 'dd-MM-yyy')}</td>
           
            <td className="border border-white px-1 py-1 " >   {categorydata?.find(category => category._id === transaction.category)?.category}</td>
        
            <td  className="border border-white px-1 py-1 ">{transaction.amount}</td>
            <td   className="border border-white px-1 py-1 ">{transaction.description}</td>
           <td   className="border border-white px-1 py-1 ">{transaction.transactionType}</td>
          
         
          </tr>

          



))}
    
    
    
      </table>

</div>

</>


  
  )
}
export default Content;
