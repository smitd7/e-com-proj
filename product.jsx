import React from 'react'

const Product = (props) => {
    const {id,title,price,productImage}=props.data;
  return (
    <div className='product'> 
        <img src={productImage} />
        <div className='description'>
            <p>
                <b>{title}</b>
            </p>
            <p>${price}</p> 
        </div> 
        <button className='addToCartBttn'>Add To Cart</button>
    </div>
  ) 
}

export default Product
