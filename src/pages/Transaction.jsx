import React from 'react'
import Addtransactions from '../compoents/Addtransactions'
import { useParams } from 'react-router-dom'

const Transaction = () => {
  const {id} = useParams()
  return (
    <div>
      <Addtransactions/>
    </div>
  )
}

export default Transaction
