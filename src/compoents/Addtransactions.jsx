import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useTransaction } from '../services/transactionServices'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'


const Addtransactions = () => {

  const navigate = useNavigate()
  const {isLoading,isSuccess} = useQuery()


  const validationSchema = Yup.object({
    amount: Yup.string().required('Amount is required'),
    category: Yup.string().required('Category is required'),
    description: Yup.string().required('Description is required'),
    type: Yup.string().required('Type is required'),
  })

  const initialValues = {
    amount: '',
    category: '',
    description: '',
    type: '',
  }

  const handleSubmit = async(values) => {

   try{
    console.log('Form data', values)
    useTransaction(values)
    alert('Transaction added successfully')
  }

catch(error) {

      console.log('Error',error)
      alert('Failed to add transaction')
  
}

if(isLoading){

        return <>Loading...</>

   }

      if(isSuccess){
        console.log(data,"==data")
      }

}
  


  }

  return (
    <div className="flex justify-center items-center h-screen bg-red-400">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md text-center">
        <h1 className="text-xs block text-center font-semibold">Add Transaction</h1>
        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
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
                <Field as="select" name="type" className="border w-full text-xs text-center">
                  <option value="" disabled>
                    Select your transaction type
                  </option>
                  <option value="Expense">Expense</option>
                  <option value="Income">Income</option>
                </Field>
                <ErrorMessage name="type" component="div" className="text-red-500 text-xs" />
              </div>

              <br />
              <div className="text-center">
                <button type="submit" className="border border-black rounded-full text-xs w-full"  >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Addtransactions
