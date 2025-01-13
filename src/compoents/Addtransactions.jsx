import React from 'react'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {  postTransactionAPI } from '../services/transactionServices'




const AddTransaction = () => {
  
   
    const validationSchema = Yup.object({

      amount: Yup.number().required('Amount is required'),

      category: Yup.string().required('Category is required'),

      description: Yup.string().required('Description is required'),

      transactionType: Yup.string().required('Type is required'), 
    })

    const {mutateAsync} = useMutation({
        mutationFn:postTransactionAPI,
        mutationKey:["addTransaction"]
    })
 
    const initialValues = {

      amount: '',
      category: '',
      description: '',
      transactionType: '',
    }


    const handleSubmit = (values) =>{
      console.log("hi");
      
      console.log(values)
         
        mutateAsync(values)
        .then((data)=>{

        console.log(data)
        
      //dispatch(addtransaction(data))   
      })
    }

  return (

    <div className="flex justify-center items-center h-screen bg-red-400">
    <div className="w-96 p-6 shadow-lg bg-white rounded-md text-center">
      <h1 className="text-xs block text-center font-semibold">Add Transaction</h1>
      <br />


<Formik
initialValues = {initialValues}
validationSchema = {validationSchema}
onSubmit = {handleSubmit}
>
<Form>


<div>
      <Field
                  type="number"
                  name="amount"
                  className="border w-full text-xs text-center"
                  placeholder="Enter amount"
                />
   <ErrorMessage name="amount" component="div" className="text-red-500 text-xs" />
   </div>


   
   <div>
      <Field
                  type="text"
                  name="category"
                  className="border w-full text-xs text-center"
                  placeholder="Enter category"
                />
                <ErrorMessage name="category" component="div" className="text-red-500 text-xs" />
              </div>



              <div>
                <Field
                  type="text"
                  name="description"
                  className="border w-full text-xs text-center"
                  placeholder="Enter description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>




              <div className="text-xs mt-1 border border text-center w-full">
                <Field as="select" name="transactionType" className="border w-full text-xs text-center">
                  <option value="" disabled selected>
                    Select your transaction type
                  </option>
                  <option value="Expense">Expense</option>
                  <option value="Income">Income</option>
                </Field>
                <ErrorMessage name="transactionType" component="div" className="text-red-500 text-xs" />
              </div>


    

<button type='submit' className='bg-stone-950 text-white rounded-full text-xs w-full  cursor-pointer' >Submit</button>

</Form>
</Formik>

<div>

    
    </div>    


</div>

</div>

       

  )
}

export default AddTransaction