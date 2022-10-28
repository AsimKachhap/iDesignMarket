import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {

  const products = useSelector((state)=> state.allProducts.products);
  console.log(products);
  const productList = (products.products).map((product)=>{
    const {id, title, description, price, stock, brand, category, thumbnail, images} = product;

    return(
      <div className='product-container' key={id}>
        <div className='thumbnail'>
            <img src={thumbnail} alt={title} />
        </div>
        <div className='display-information'>
            <div className='product-title'><p>{title}</p></div>
            <div className='product-desc'><p>{description}</p></div>
            <div className='product-category'><p>{category}</p></div>
            <div className='product-price'><p>{price}</p></div>
           
        </div>
    </div>
    );

  });


  return (
    <>
    {productList}
    </>
  )
}

export default ProductComponent;