import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import './App.css'
import {Header} from "./componenta/header";
import {ProductList} from "./componenta/product-list";
import {setProducts} from "./redux";

export default function App() {
    const {cart, wishlist, products} = useSelector(({
                                                        cart: {cart},
                                                        wishlist: {wishlist},
                                                        products: {products}
                                                    }) => ({cart, wishlist, products}))


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])
    return (
        <div>
            <Header/>
            <ProductList products={products}/>
        </div>
    )
}


