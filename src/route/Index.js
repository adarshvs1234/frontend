import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'

import Transaction from '../pages/Transaction'
import Sign from '../compoents/Sign'
import Transactions from '../pages/Transactions'



import Categorylis from '../pages/Categorylis'




import Prof from '../pages/Prof'
import Changep from '../pages/Changep'
import Changen from '../pages/Changen'
import Categorytransac from '../pages/Categorytransac'
  




const Index = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Sign/>}/>
       

        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/alltransaction' element={<Transactions/>}/>
       
       
        <Route path='/categorylist' element={<Categorylis/>}/>
        <Route path='/categorytrans/:id' element={<Categorytransac/>}/>

        
        
        <Route path='/profile' element={<Prof/>}/>
        <Route path='/password' element={<Changep/>}/>
        <Route path='/name' element={<Changen/>}/>
      
       
</Routes>
    </BrowserRouter>
    </>
  )
}

export default Index
