import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { categoryTransactionAPI } from '../services/transactionServices'
import { useParams } from 'react-router-dom'

const Transaccategory = () => {

    const {id} = useParams()
console.log("id",id)

const {data} = useQuery({
    queryFn:()=>categoryTransactionAPI({id}),
    queryKey:["categorytransaction",id]
    
 })

 console.log("data4",data)

  return (
    <div className="mt-1 bg-red-300 h-screen ml-1 mr-1">
    <div className="flex justify-center pt-2">
      <h1 className="text-center border-2 border-black rounded p-1 w-64 text-xs">Category </h1>
    </div>
    
    <br />

    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-white text-left ml-1 mr-1">
      
          <tr>
          <th className="border border-white px-9 py-1">No</th>
            <th className="border border-white px-9 py-1">Categories</th>
            <th className="border border-white px-9 py-1">Transaction Type</th>
            <th className="border border-white px-9 py-1">Amount</th>
           
          </tr>
     
          
       
          {data?.map((category,index) => (

            <tr key={index}>
              <td   className="border border-white px-1 py-1 ">{index+1}</td>
              <td className="border border-white px-1 py-1 " >{category.category}</td>
              <td  className="border border-white px-1 py-1 ">{category.transactionType}</td>
              <td   className="border border-white px-1 py-1 ">{category.categoryTransactions.amount}</td>
            </tr>
          ))}
       
      </table>
    </div>
  </div>

);
};

export default Transaccategory
