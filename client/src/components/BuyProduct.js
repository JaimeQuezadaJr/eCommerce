import React, { useState, useEffect } from 'react';
import Product from './Product'

const BuyProduct = () => {

  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:'instant'})
  },[])
  
  return (
    <div>
        <Product></Product>
    </div>
  )
}

export default BuyProduct