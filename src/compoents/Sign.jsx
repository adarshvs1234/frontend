import React from 'react'
import * as Yup from 'yup'
import {Formik,Form,Field,ErrorMessage} from 'formik'


const Sign = () => {

const validationSchema = Yup.object({

    username :  Yup.string().required('Username is required'),
    password : Yup.string()
                .min(6,'Password should have 6 characters')
                .required('Password is required'),
                                                                                                                                                                                                 
    email : Yup.string()
            .required('Email is required')
})


const initialValues = {

    username :'',
    email :'',
    password : ''

}

const handleSubmit = (values) =>{

    console.log('Form Data ',values)
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


