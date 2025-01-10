import React from 'react'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'

import { jwtDecode } from 'jwt-decode'
import { userData } from '../utls/cookiehandle'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { userUpdate } from '../redux/authSlice'
import { changeNameAPI } from '../services/userServices'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const Changename = () => {

        const dispatch = useDispatch()
    
    const validationSchema = Yup.object({

  username : Yup.string().required("Username is required")      
    })

    const {mutateAsync} = useMutation({
        mutationFn:changeNameAPI,
        mutationKey:["changename"]
    })

    const initialValues = {

        username :" "
    }


    const handleSubmit = (values) =>{
        mutateAsync(values).then((token) =>{

            const data =   jwtDecode(token)
            Cookies.set("userData",((token)))
            dispatch(userUpdate(data))
        })
    }

  return (


    <div className="flex justify-center items-center h-screen bg-red-400 shadow-lg">
    <div className="w-90 p-6 shadow-lg bg-white rounded-md">
Change name

<Formik
initialValues = {initialValues}
validationSchema = {validationSchema}
onSubmit = {handleSubmit}
>
<Form>

<div>
    <Field type="text" name="newName" className='text-xs border text-center w-full'  placeholder='Enter username'/>
    <ErrorMessage name="newName" component="div"  className='text-red-500 text-xs'/>
</div>


<button type='submit' className='bg-stone-950 text-white rounded-full text-xs w-full  cursor-pointer'>Submit</button>

</Form>
</Formik>

<div>

    
    </div>    


</div>

</div>

       

  )
}

export default Changename
