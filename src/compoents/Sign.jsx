import React from 'react'
import * as Yup from 'yup'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/authSlice'
import Cookies from 'js-cookie'
import { userData } from '../utls/cookiehandle'
import { jwtDecode } from 'jwt-decode'
import { signAPI } from '../services/userServices'



const Sign = () => {

    const dispatch = useDispatch()

const validationSchema = Yup.object({

    username :  Yup.string().required('Username is required'),
    password : Yup.string()
                .min(3,'Password should have 3 characters')
                .required('Password is required'),
                                                                                                                                                                                                 
    email : Yup.string().email()
            .required('Email is required')
})


const initialValues = {

    username :'',
    email :'',
    password : ''

}

const {mutateAsync,isError,error} = useMutation({
  mutationFn: signAPI,
  mutationKey: ["sign"]
})

const handleSubmit = (values) =>{
  console.log(values);

  


  mutateAsync(values).then((token)=>{
       
    console.log(token);
    
        const data = jwtDecode(token)
        console.log(data);
        
        Cookies.set("userData",(token))
        dispatch(signup(data))
      
        
   
    // console.log('Form Data ',values)

    //     dispatch(signup(values))
    //   const toke = Cookies.set("userData")
    //   console.log(toke);
      
    //   // ,JSON.stringify(token))
        })

}

  return (

    <div className='flex justify-center items-center h-screen bg-red-400 shadow-lg '>
        <div className='w-90 p-6 shadow-lg bg-white rounded-md'>
     <h1 className='text-center'>Sign Up</h1>
     <hr />
    <br />  



    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >

{()=>(

    <Form>
        <div>
            <Field type="text" name="username" className=" text-xs border" placeholder="Enter username" />

            <ErrorMessage name='username' component='div'  className='text-red-500 text-xs' />
        </div>


        <div>
        <Field type="text" name="email" class="form-control text-xs border" placeholder="Enter email" />

        <ErrorMessage name='email' component='div' className='text-red-500 text-xs'/>
        </div>


        <div>
        <Field type="password" name="password" className="form-control text-xs  border" placeholder="Enter password"/>

        <ErrorMessage name='password' component='div' className='text-red-500 text-xs'/>
        </div>

        <div>
          <button type="submit" class="bg-stone-950 rounded full w-full text-xs text-white">Register</button>
        </div>


    </Form>
)}

</Formik>
     
<div className='text-xs'>
        Already signed? <a href='/login' >Login</a> 
       </div>

   </div>
</div>


  )
}

export default Sign


