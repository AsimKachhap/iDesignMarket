import React from 'react'

const Product = () => {
  return (
    <div className='product-container'>
        <div className='thumbnail'>
            <img src='https://dummyjson.com/image/i/products/1/thumbnail.jpg' alt='' />
        </div>
        <div className='display-information'>
            <div className='product-title'><p>Product Title</p></div>
            <div className='product-desc'><p>Product-Description</p></div>
            <div className='product-rating'><p>Product-Rating</p></div>
            <div className='product-price'><p>Product-Price</p></div>
           
        </div>
    </div>
  )
}

export default Product