import React from 'react'

const Loginnavbar = () => {
  return (

    <div class="flex justify-center items-center h-screen bg-red-600">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md">


      <h1 className='text-center '>Log in</h1>
        <label>Username</label>
        <br />
        <input type='text'  placeholder='Enter username'/>

        <br />
        <label>Password</label>
        <br />
        <input type='text' placeholder='Enter password'/>
      


      <div>
        <br />
        <input type='checkbox'/>
        <label>Remember me</label>
      </div>

      <div className='text-center'>
        <button type='submit' className='bg-stone-950 text-white'>Login</button>
        
    </div>
    </div>
    </div>

  )
}

export default Loginnavbar
