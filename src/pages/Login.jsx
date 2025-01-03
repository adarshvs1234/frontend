import React from 'react'
import Loginnavbar from '../compoents/Loginnavbar'
import { Provider } from 'react-redux'
import store from '../redux/Store'

const Login = () => {
  return (
    
      <Provider store={store}>
      <Loginnavbar/>
      </Provider>
   
   
  )
}

export default Login
