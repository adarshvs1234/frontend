import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'

import Transaction from '../pages/Transaction'
import Sign from '../compoents/Sign'
import Transactions from '../pages/Transactions'



import Categorylis from '../pages/Categorylis'

import Booktransaction from '../compoents/Booktransaction'
import Foodtrans from '../pages/Foodtrans'

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
       

        <Route path='/booktransaction' element={<Booktransaction/>}/>
        <Route path='/foodtransaction' element={<Foodtrans/>}/>
        


</Routes>
    </BrowserRouter>
    </>
  )
}

export default Index
