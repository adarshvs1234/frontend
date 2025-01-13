import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { deleteOneTransactionAPI, fetchTransactionAPI } from '../services/transactionServices'
import { useNavigate, useParams } from 'react-router-dom'
import {format} from 'date-fns'
import { fetchCategoryAPI } from '../services/categoryServices'

const Transactionpage = () => {


    const navigate = useNavigate()
  
 const {data,isLoading,isError,refetch} = useQuery({

 queryFn:fetchTransactionAPI,
   queryKey:["fetchalltransaction"],

   
   refetchOnWindowFocus: true,
   staleTime: 30000
 })
  

 //fetchingcategoryAPI to dispaly categoryname
const {data:categorydata} = useQuery({

  queryFn:fetchCategoryAPI,
  queryKey:["fetchcategory"]

})

console.log(categorydata);


const {mutate,data: itemdata}=useMutation({

  mutationFn:deleteOneTransactionAPI,  
  mutationKey:["deleteOne"]
})

const handleclick =(key)=>{

  console.log("transac to be deleted",key)
  mutate({id:key})
}


const handleupdate = (key)=>{
  console.log("update")
  navigate(`/transactionupdate/${key}`)
}




if(isLoading)
  return <div>Loading transactions...</div>


if(isError)
  return <div>Error...</div>
 //create API  for fetching category for each transaction
 console.log("data",data)
  return (

  <div className='  mt-1 bg-red-300  h-screen  ml-1 mr-1 ' >
    <div className='flex justify-center pt-2'>
      <h1 className='text-center border-2 border-black rounded p-1 w-64  '>Transactions</h1>
      
    </div>
    <br />
    
    
      <div className='flex justify-center'>
      <table className='table-auto border-collapse border border-gray-300  text-left ml-1 mr-1 '>
        <tr>
        <th className='border border-white px-1 py-1'>No</th>
          <th className='border border-white px-1 py-1'>Date</th>
         <th className='border border-white px-1 py-1'>Category</th>
          <th className='border border-white px-1 py-1'>Amount</th>
          <th className='border border-white px-1 py-1'>Description</th>
          <th  className='border border-white px-1 py-1'>Type</th>
          <th  className='border border-white px-1 py-1 col-auto'>Operation</th>
          
        </tr>


        {data?.map((transaction,index) => (

        

            <tr key={transaction._id}>
          
            <td   className="border border-white px-1 py-1 ">{index+1 }</td>
            <td className="border border-white px-1 py-1 " > {format(new Date(transaction.createdAt), 'dd-MM-yyy')}</td>
           
            <td className="border border-white px-1 py-1 " >   {categorydata?.find(category => category._id === transaction.category)?.category}</td>
        
            <td  className="border border-white px-1 py-1 ">{transaction.amount}</td>
            <td   className="border border-white px-1 py-1 ">{transaction.description}</td>
           <td   className="border border-white px-1 py-1 ">{transaction.transactionType}</td>
          
           <td>  <button type='button' className='border border-white px-1 py-1' onClick={()=>handleupdate()}>Update</button></td>
           <td ><button type='button'  className='border border-white px-1 py-1' onClick={()=>handleclick(transaction._id)}>Delete</button></td> 
          </tr>

          



))}
    
    
    
      </table>
      </div>
    
</div>
    
    


)}

export default Transactionpage

