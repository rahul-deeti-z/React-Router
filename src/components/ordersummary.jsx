import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
  const navigate = useNavigate()
  return (
    <>
     <div>Order Confirmed</div>
     <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default OrderSummary

// This navigate method takes two arguments
// first  argument is the path, or number
// second argument is an object
// withing that object if use { replace: true } do you know what happens?