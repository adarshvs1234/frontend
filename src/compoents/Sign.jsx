import React from 'react'

const Sign = () => {
  return (

    <div className='justify-center items-center h-screen bg-red-400 shadow-lg '>
        <div classNam='w-90 p-6 shadow-lg bg-white rounded-md'>
     <h1 className='text-center'>Sign Up</h1>
   
     <div>
            {/* <label for="name" class="form-label text-xs" > Username</label> */}
            
            <input type="text" id="name" class="form-control text-xs pl-2" placeholder="Enter username" />
        </div>



        <div>
          <label for="email" class="form-label text-xs">Email</label>
        
          <input type="text" id="email" class="form-control text-xs pl-2" placeholder="Enter email" />
        </div>

        <div>
          <label for="password" class="form-label text-xs">Password</label>
          <input type="password" id="password" class="form-control text-xs" placeholder="Enter password"/>
        </div>
        
        <br />
        <div>
          <button type="submit" class="bg-gray-500 rounded full w-full text-xs">Register</button>
        </div>
        

   </div>
</div>


  )
}

export default Sign
