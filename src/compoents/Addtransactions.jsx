import React from 'react'

const Addtransactions = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-red-600">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md">

        <h1 class="text-3xl block text-center font-semibold">Add Transaction</h1>
        <hr/>
        <div>
            <label for="amount"  >Amount</label>
            <input type="text" id="amount" class="border" placeholder="Enter amount" />
        </div>

        <div>
          <label for="category" >Category</label>
          <input type="text" id="category" class="border" placeholder="Enter category" />
        </div>


        <div>
          <label for="Description" >Description</label>
          <input type="text" id="Description" class="border" placeholder="Enter Description"/>
        </div>


        <div>
          <label for="type" >Transaction Type</label>
          <input type="text" id="type" class="" placeholder="Enter type" />
        </div>

        <br />
        <div className='text-center'>
            <button type='submit'  className='border border-black '> Submit</button>
        </div>
        </div>


      
    </div>
  )
}

export default Addtransactions
