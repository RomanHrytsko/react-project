import React from 'react';

export const ProductItem = ({
                                isAddedToWishlist,isAddedToCart,onAddToCart, onAddToWishlist, product, product:{id, title,price,image}
                            }) => {
    return (
        <div>
            <div className='product'>
                <h5>ID: {id}</h5>
                <h5>Title: {title}</h5>
                <h5>Price: {price}$</h5>
                <img src={image} alt="photo"/>
                <button onClick={() => onAddToCart(product)} style={{background: isAddedToCart ? 'red': 'green'}}>{isAddedToCart ? 'Remove from cart' : 'Add to cart'}</button>
                <button onClick={() => onAddToWishlist(product)} style={{background: isAddedToWishlist ? 'red' : 'green'}}>{isAddedToWishlist ? 'Remove from wishlist' : "Add to wishlist"}</button>
            </div>
        </div>
    );
}



