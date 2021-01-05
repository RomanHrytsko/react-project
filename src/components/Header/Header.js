import React, {useMemo} from 'react'
import {useSelector} from "react-redux";
import {ProductItem} from "../ProductItem";

export const Header = ({products}) => {
    const {cart, wishlist} = useSelector(({cart:{cart}, wishlist:{wishlist}})=>({cart,wishlist}))

const cartAmount = useMemo(()=>{

    let price = 0
    for(let value of cart){
        if(value){
            price += value.price
        }

    }
    return price
},[cart.length])
    const wishlistAmount = useMemo(()=>{

        let price = 0
        for(let value of wishlist){
            if(value){
                price += value.price
            }

        }
        return price
    },[wishlist.length])

    return(
        <div>
            <header>
                <h2>Welcome to my shop</h2>
                <div className={'CartAndWishlistBlock'}>
                    <div title={`Total price: ${cartAmount}$`}>cart: {cart.length}</div>
                    <div title={`Total price: ${wishlistAmount}$`}>wishlist: {wishlist.length}</div>

                </div>
            </header>
        </div>
    )
}