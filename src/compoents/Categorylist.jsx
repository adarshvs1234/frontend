import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteCategortyAPI, fetchCategoryAPI } from '../services/categoryServices';

const Categorylist = () => {
  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery({
    queryFn: fetchCategoryAPI,
    queryKey: ["categorylist"],
  });


  const {mutate,data:itemdata}= useMutation({

    mutationFn:deleteCategortyAPI,
    mutationKey:["categorydelete"]
    
  })


  if (isError) {
    return <div>Error occurred while fetching categories.</div>;
  }

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

 
  const handleclick = (key)=>{
    console.log(key);
    
    
    navigate(`/categorytrans/${key}`,)
  }



  //delete
    const deletehandle = (key)=>{

      
      console.log("tobedeleetd",key)
      mutate(key)
       
 }


  return (
    <div className="mt-1 bg-red-300 h-screen ml-1 mr-1">
      <div className="flex justify-center pt-2">
        <h1 className="text-center border-2 border-black rounded p-1 w-64 text-xs">Category List</h1>
      </div>
      <br />

      <div className="flex justify-center">
        <table className="table-auto border-collapse border border-white text-left ml-1 mr-1">
        
            <tr>
              <th className="border border-white px-9 py-1">Categories</th>
            </tr>
       
         
            {data?.map((category) => (

              <tr key={category._id}>
                <td className="border border-white px-1 py-1 cursor-pointer" onClick={()=>handleclick(category._id)}>{category.category}</td>
                <td className='bg-red-400 cursor-pointer' onClick={()=>deletehandle(category._id)}>
                 [X]
                </td>

              </tr>
            ))}
         
        </table>
      </div>
    </div>

  );
};

export default Categorylist;
