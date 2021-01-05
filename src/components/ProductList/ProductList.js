import React, {useMemo} from 'react';
import {ProductItem} from "../ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux";

export const ProductList = ({products}) => {

    const dispatch = useDispatch()
    const {cart, wishlist} = useSelector(({wishlist: {wishlist}, cart: {cart}}) => ({cart, wishlist}))
    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    };
    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    };



    return (
        <div>
            {products.map(product => (
                <ProductItem isAddedToWishlist={!!wishlist.find(({id}) => id === product.id)}
                             isAddedToCart={!!cart.find(({id}) => id === product.id)} product={product}
                             onAddToCart={onAddToCart}
                             onAddToWishlist={onAddToWishlist} key={product.id}
                />

            ))}
        </div>
    );
}





