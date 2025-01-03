
import axios from "axios"
import {BASE_URL} from "../utls/urls"
import {useQuery}   from '@tanstack/react-query'

const fetchuser = async() =>{

    const response = await axios.get('${BASE_URL}/user/signin')
    return response.data
}


export const loginAPI = ()=>{

   useQuery({
  
     queryKey:['users'],
        queryFn :fetchuser
            
   )}

}
        
 
        



