import React from 'react'
import ProductListing from './ProductListing';

const Products = () => {
  return (
    <div className="product-page-container">
      <div className="side-section">
        <h1>Filters</h1>
      </div>
      <div className="product-section">
        <h1>Sort</h1>
        <ProductListing/>
      </div>
    </div>
  )
}

export default Products