import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Category from '../compoents/Category'
import Transaction from '../pages/Transaction'
import Signup from '../pages/Signup'
const Index = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/categoryadd' element={<Category/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index
