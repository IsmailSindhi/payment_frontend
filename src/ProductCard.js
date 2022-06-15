import React, { useContext } from 'react'
import './ProductCard.css'
import {CardNumberContext, ExpiryMonthContext, ExpiryYearContext,ScurityCodeContext } from './Home'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProductCard({product}) {

  const navigate = useNavigate()

  const cardNumber = useContext(CardNumberContext)
  const expiryMonth = useContext(ExpiryMonthContext)
  const expiryYear = useContext(ExpiryYearContext)
  const securityCode = useContext(ScurityCodeContext)
  const price = product.price
  const ref = product.ref
  
  const buy = (e)=> {
      e.preventDefault();
 
    axios.post('https://adyenpay.herokuapp.com/payment', {
    "cardNumber": cardNumber,
    "expiryMonth": expiryMonth,
    "expiryYear": expiryYear,
    "securityCode": securityCode,
    "price" : price,
    "ref" : ref
})
  .then( response => {
    console.log(response) 
    if(response.status === 200){
      navigate("/sucessMessage")
    }
    else{
      alert("Transaction has Failed")
    }
  })
  .catch( error => { if(error){ alert("Transaction has Failed")} console.log(error)  })
  }

  return (
    // <div>productCard</div>
    <>
    <div className='product__card' >
    
    <img src={product.imageUrl} alt={product.name} />
      <p>{product.name}</p>
      <span>{`₹${product.price}`}</span>
      <br></br>
      <button onClick={buy}>Buy</button>
    </div>
    </>
  )
}

export default ProductCard