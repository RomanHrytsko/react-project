import React from "react";

export const Header = (props) => {
    return(
    <header className='d-flex justify-content align-center'>
        <h2> Hello in my shop</h2>
        <div className='d-flex justify-content'>
            <div className='mx-10 align-center'>Wishlist:</div>
            <div className='mx-10 align-center'>Cart:</div>
        </div>
    </header>)

}