import React, {useMemo} from 'react'
import {useSelector} from "react-redux";
import {ProductItem} from "../ProductItem";

export const Header = ({products}) => {
    const {cart, wishlist} = useSelector(({cart:{cart}, wishlist:{wishlist}})=>({cart,wishlist}))



    return(
        <div>
            <header>
                <h2>Welcome to my shop</h2>
                <div className={'CartAndWishlistBlock'}>
                    <div>cart: {cart.length}</div>
                    <div >wishlist: {wishlist.length}</div>

                </div>
            </header>
        </div>
    )
}