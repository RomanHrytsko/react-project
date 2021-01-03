import React, {useEffect} from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/Header";
import {ProductList} from "./components/ProductList";
import {setProducts} from "./redux";

export default function App() {

    const dispatch = useDispatch()
    const {cart, wishlist, products} = useSelector(({
                                                        cart: {cart},
                                                        products: {products},
                                                        wishlist: {wishlist}
                                                    }) => ({cart, wishlist, products}))

    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])
    return (
        <div>

            <Header products={products}/>
            <ProductList products={products} key={products.id}/>
        </div>
    );
}