
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'


export const getUserData = ()=>{
    Cookies.get("userData")
}

export const getToken = ()=>{
    return Cookies.get("userData")  
}

 export const userData = ()=>{
    return getUserData()? jwtDecode(getUserData()):null
} 


