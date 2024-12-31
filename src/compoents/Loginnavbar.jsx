import React from 'react'
import * as Yup from 'yup'
import {Formik,Form,Field,ErrorMessage} from 'formik'

const Loginnavbar = () => {

const validationSchema = Yup.object({

  username : Yup.string().required('Username is required'),
  password : Yup.string()
              .min(6,'Password must be atleast 6 characters')
              .required('Password is required')

})


const initialValues = {

  username:'',
  password:'',
  rememberMe:false
  
} 

const handleSubmit = (values) =>{
  console.log('Form Data',values)
}




  return (

    <div class="flex justify-center items-center h-screen bg-red-400 shadow-lg">
      <div class="w-90 p-6 shadow-lg bg-white rounded-md">


      <h1 className='text-center '>Log in</h1>
      <hr />


      <Formik 
        initialValues = {initialValues}
      validationSchema = {validationSchema}
      onSubmit = {handleSubmit}
      >

      {()=>(
<Form>


<div className="mb-4">
<Field type='text' name='username'  className='text-xs border text-center w-full' placeholder='Enter username'/>

<ErrorMessage name='username'  component='div'  className='text-red-500 text-xs'/>

</div>


<div className="mb-4">
  <Field  type='password'  name='password'   className="text-xs border text-center w-full" placeholder="Enter password"/>
  <ErrorMessage name='password' component="div" className="text-red-500 text-xs" />
</div>


<div className="flex items-center pt-4">
    <Field type="checkbox" name="rememberMe" className="mr-2" />
  <label className="text-xs">Remember me</label>
</div>


<div className="text-center mt-4">
<button type="submit" className="bg-stone-950 text-white rounded-full text-xs w-full"> Login</button>
</div>

</Form>
)}

</Formik>

        {/* <label className='text-xs'>Username</label> */}
        <br />
       
      {/* <hr /> */}
      
        {/* <label className='text-xs'>Password</label> */}
        
    <div className='text-xs pt-2'>
      Don't you have an account? <a href='/signup' >Register</a>
    </div>
    </div>
    </div>

  )
}


export default Loginnavbar
