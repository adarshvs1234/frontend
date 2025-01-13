import { Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'
import * as Yup from 'yup'



const Transactionupdate = () => {

     const validationSchema = Yup.object({
    
          amount: Yup.number(),

          category: Yup.string(),
    
          description: Yup.string(),
    
          transactionType: Yup.string(), 
        })

        const initialValues = {

            amount: '',
            category: '',
            description: '',
            transactionType: '',
          }


const handleSubmit = (values)=>{
    console.log(values)
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
      
       </div>
    
    
       
       <div>
          <Field
                      type="text"
                      name="category"
                      className="border w-full text-xs text-center"
                      placeholder="Enter category"
                    />
                    
                  </div>
    
    
    
                  <div>
                    <Field
                      type="text"
                      name="description"
                      className="border w-full text-xs text-center"
                      placeholder="Enter description"
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

export default Transactionupdate
