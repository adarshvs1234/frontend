import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/authSlice'
import { useDispatch, useSelector} from 'react-redux'
import Cookies from 'js-cookie'
import Loginnavbar from './Loginnavbar'



const Profile = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  
  
  const handleLogout = () =>{
  dispatch((logout()))
 if( Cookies.remove("userData"))
  alert('Logout out ')
    

    navigate('/login')
}

// const name =  {

// }

// useSelector((state)=>state.auth?.user?.name)
//  console.log("name",name)

 
return (
    <div className='text-center h-screen'>
    <div className='bg-red-300'>
      
        <div className='text-center'>
      {/* <div >{name}</div> */}
      
  
    
    <button type='button' className='border border-black text-xs ' onClick={()=>navigate('/name')}>Change username</button>
    </div>
    </div>
    <br />
    <button type='button' className='border border-black text-xs form-control' onClick={()=>navigate('/password')}>Change password</button>

<br />
   <button type='button' className='border border mt-9 '  onClick={handleLogout}>LOGOUT</button> 
    </div>
 
    
   )
}

export default Profile
