import React from "react";
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux";

export const ProductList = ({products}) => {
    const dispatch = useDispatch()
    const wishlist = useSelector(({wishlist: {wishlist}})=> wishlist)
    const OnAddToCart = (product)=>{
        dispatch(toggleItemInCart(product))
    }
    const OnAddToWishList = (product)=>{
        dispatch(toggleItemInWishlist(product))

    }
    return (
        <div>
            {products.map((product) => (
                <ProductItem isAddedToWishList={!!wishlist.find(({id}) => id === product.id)} OnAddToCart={OnAddToCart} OnAddToWishList={OnAddToWishList} key={product.id} product={product}/>

            ))}
        </div>
    );
}