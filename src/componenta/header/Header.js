import React from "react";
import {useSelector} from "react-redux";

export const Header = (props) => {
    const {cart, wishlist} = useSelector(({cart:{cart}, wishlist:{wishlist}})=>({cart,wishlist}))

    return(
    <header className='d-flex justify-content align-center'>
        <h2> Welcome to my shop</h2>
        <div className='d-flex justify-content'>
            <div className='mx-10 align-center'>Wishlist: {wishlist.length}</div>
            <div className='mx-10 align-center'>Cart:{cart.length}</div>

        </div>
    </header>)

}