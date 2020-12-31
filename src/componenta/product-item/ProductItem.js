import React from "react";

export const ProductItem = ({isAddedToWishList, OnAddToCart, OnAddToWishList, product, product: {id, title, price}}) => {
    return (
        <div className='d-flex align-center itemBlock' key={id}>
            <h5>ID: {id}</h5>
            <h5>Title: {title}</h5>
            <h5>Price: {price}$</h5>
            <button onClick={() => OnAddToCart(product)}>Add to cart</button>
            <button style={{backgroundColor: isAddedToWishList ? "red" : "green"}} onClick={() => OnAddToWishList(product)}>{isAddedToWishList ? 'Remove from wishlist': 'Add to wishlist'}</button>
        </div>)
}