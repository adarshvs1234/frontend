import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categorylist = () => {


    const navigate = useNavigate()
  return (
    <div className='  mt-1 bg-red-300  h-screen ml-1 mr-1 ' >
    <div className='flex justify-center pt-2'>
      <h1 className='text-center border-2  border-black  rounded p-1 w-64  text-xs w-40'>Category List</h1>
      
    </div>
    <br />


      <div className='flex justify-center  '>
      <table className='table-auto border-collapse border border-white  text-left ml-1 mr-1  '>
        <tr>
          <th className='border border-white px-9 py-1 '>Categories </th>
         
        </tr>

        <tr>
          <td  className='border border-white px-1 py-1 cursor-pointer'  onClick={()=>navigate('/foodtransaction')}>Food  </td> <button  className='bg-red-500  border border-black text-sm'>x</button> 
        </tr>

        <tr>
            <td  className='border border-white px-1 py-1 cursor-pointer'   onClick={()=>navigate('/traveltransaction')}>Travel</td> <button className='bg-red-500  border border-black text-sm '>x</button>
        </tr>



        <tr>
            <td  className='border border-white px-1 py-1 cursor-pointer' onClick={()=>navigate('/booktransaction')}>Books</td>   <button  className='bg-red-500  border border-black'>x</button>
        </tr>

      </table>
</div>
</div>

  )
}

export default Categorylist
