import React from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import { userUpdate } from '../redux/authSlice';
import { Mutation, useMutation } from '@tanstack/react-query';

import { changePasswordAPI } from '../services/userServices';
import { jwtDecode } from 'jwt-decode';
import { userData } from '../utls/cookiehandle';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie'


const ChangePassword = () => {


  const dispatch = useDispatch()
const {mutateAsync,isError,error} = useMutation({
  mutationFn : changePasswordAPI,
  mutationKey:["changepassword"]
})

  
  const initialValues = {
 password:''
  }
     
 

  const validationSchema = Yup.object({

      password: Yup.string().required("Password required"),
      confirmpassword:Yup.string() 
                  .oneOf([Yup.ref('password'), null], 'Passwords must match')
                  .required('Confirm Password is required'),
    })




   const  handleSubmit=(values)=>{


  mutateAsync(values).then((token)=>{
    const data = jwtDecode(token)
    console.log(data)
    
    Cookies.set("userData",(token))
    dispatch(userUpdate(data))


    alert('Password changed successfullyy')

   })

  }

    
  return (
     <div className="flex justify-center items-center h-screen bg-red-400">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md text-center">
        <div className="text-xs block text-center font-semibold">Change Password</div>
     

<Formik 
initialValues={initialValues}
validationSchema = {validationSchema}
onSubmit = {handleSubmit}
>
<Form>


  
<div>
<Field type="password"  name="password"  className='text-xs border text-center w-full' placeholder='Enter password'/>
<ErrorMessage name='password'  component='div' className="text-red-500 text-xs" />
</div>

<div>
  <Field type="password" name="confirmpassword"   className='text-xs border text-center w-full' placeholder='Re-enter password'/>
  <ErrorMessage name='confirmpassword'  component='div' className="text-red-500 text-xs" />
</div>

<div>
  <button type='submit' className='text-xs border border'>Submit</button>
</div>
  </Form>




</Formik>


{/* <Form onSubmit={Formik.handleSubmit}>
          <div>
            <Field
            type="password"
            
            name="password"
            className="border w-full text-xs text-center"
            placeholder="Enter password"
            /> */}
         
       
          </div>



       
        
          {/* </Form> */}
     </div>
   
    // </div>

  
      
  );
};

export default ChangePassword;
