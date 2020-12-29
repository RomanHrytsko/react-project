import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addCart, fetchItemList} from "./redux/action-creators";
import './App.css'

export default function App() {
    const dispatch = useDispatch()
    const {itemList, cart} = useSelector(({itemList: {itemList}, cart:{cart}}) => ({itemList, cart}))
    useEffect(() => {
        dispatch(fetchItemList())
    }, [dispatch])
const addToCArt = () => dispatch(addCart())
    return (
        <div>
            <div className={'header'}>
                <h3>Header</h3>
                <div className={'wishListCartBlock'}>
                    <h3>Wishlist:</h3>
                    <h3>Cart:{cart}</h3>
                </div>
            </div>
            <div className={'itemBlock'}>
                {
                    itemList.map(value => (
                        <div className={'item'}>
                            <h2>
                                {value.id}-{value.title}-{value.price}
                            </h2>
                            <form className={'formButton'} onSubmit={(e)=>e.preventDefault()}>
                                <button onClick={addToCArt}>Add to cart</button>
                                <button>Add to wishlist</button>
                            </form>
                        </div>))
                }

            </div>
        </div>
    )
}


