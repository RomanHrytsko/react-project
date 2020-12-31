import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import './App.css'
import {Header} from "./componenta/header";

export default function App() {
    const {cart,wishlist,products} = useSelector(({cart:{cart}, wishlist:{wishlist}, products:{products}})=>({cart ,wishlist,products}))

    return (
        <div>
            <Header/>
<h2>cart: {cart.length}</h2>
<h2>wishlist: {wishlist.length}</h2>
<h2>products: {products.length}</h2>
        </div>
    )
}


