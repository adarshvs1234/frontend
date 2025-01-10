
import axios from "axios";
import { BASE_URL } from "../utls/urls";
import { getToken } from "../utls/cookiehandle";

//  export const fetchTransactionAPI = async () => {

// const response = await axios.(`${BASE_URL}/transaction/transaction`);
// return response.data;
// };


// export const postTransactionAPI = async()=>{

// const response = await axios.post(`${BASE_URL}/transaction/transaction`)

// return response.data

// }


export const postTransactionAPI = async(data) =>{
        
    const token = getToken()
    console.log(token)

    const response = await axios.post(`${BASE_URL}/transaction/transaction`,data,{

            headers:{
                    Authorization:`Bearer ${token}`
            }
    })
    console.log("resonse",response)
    return response.data


    } 




    export const categoryTransactionAPI = async({data,id}) =>{
        console.log("data",data);
        
        const token = getToken()
        console.log(token)

                console.log("idcate",id)
                
                
        const response = await axios.get(`${BASE_URL}/category/category_transaction/${id}`,{
                
                params:data,
                headers:{
                        Authorization:`Bearer ${token}`
                }
        })
        
        console.log("response",response.data);
        
        return response.data
        
        }
        

    