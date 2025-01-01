import React from 'react'
import * as Yup from 'yup'
import {Formik,Form,Field,ErrorMessage} from 'formik'


const Addtransactions = () => {

  const validationSchema = Yup.object({
      amount : Yup.string()
                .required('Amount is required'),

      
      category : Yup.string()
                .required("Category is required"),


      description : Yup.string()
      .required("Description is required"),

      type : Yup.string()
      .required("Type is required"),
      
})

const initialValues = {

  amount : '' ,
  category : '',
  description : '',
  type : ''

}

const handleSubmit = (values) =>{
  console.log('Form data',values)
}
  return (
    <div class="flex justify-center items-center h-screen bg-red-400 ">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md text-center">

        <h1 class="text-xs block text-center font-semibold">Add Transaction</h1>
        
        <br />


        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >

          {()=> (

          <Form>

          <div>
            
            <Field type="text" name="amount" className="border w-full  text-xs text-center" placeholder="Enter amount" />
            <ErrorMessage name='amount'  component='div' className="text-red-500 text-xs"/>
        </div>

        <div>
          <Field type="text" name="category" className="border w-full  text-xs  text-center" placeholder="Enter category" />
          <ErrorMessage name='category' component='div' className='text-red-500 text-xs' />
        </div>


        <div>
         
          <Field type="text" name="description" className="border w-full text-xs text-center" placeholder="Enter description"/>
          <ErrorMessage name='description' component='div'   className='text-red-500 text-xs' />
        </div>


        <div>
         
          <Field type="text" name="type" className="border w-full text-xs text-center" placeholder="Enter transaction type" />
          <ErrorMessage name='type'  component='div'  className='text-red-500 text-xs' />
        </div>

        <br />
        <div className='text-center'>
            <button type='submit'     className='border border-black rounded-full text-xs w-full'> Submit</button>
        </div>



          </Form>
          )}

          </Formik>

             
      </div>


      <div>


    

      </div>
 

      
     </div>
  )
}

export default Addtransactions
