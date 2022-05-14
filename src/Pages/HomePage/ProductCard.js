import React from 'react'
import './ProductList.css'

function ProductCard({product}) {
  return (
    <div>
      <img src={product.image} 
      alt=""
      className='image'
     />
      <h5 style={{textAlign: "center"}}>{product.title}</h5>
    </div>
  )
}

export default ProductCard