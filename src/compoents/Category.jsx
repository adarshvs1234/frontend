import React from 'react'

const Category = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-red-600">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md">

        <h1 class="text-3xl block text-center font-semibold">Add Category</h1>

        <br />
        <div>
            <input type='text'    placeholder='Enter new category'  className='flow-control'/> 
        </div>

    <br />
        <div className='text-center'>
            <button type='submit' className='border border-black'>Submit</button>
        </div>
        
    </div>
    </div>
  )
}

export default Category
