import {combineReducers} from "redux";
import cart from './cart-reducer'
import wishlist from  './wishlist-reducer'
import products from  './products-reducer'
export const reducer = combineReducers({
    cart,
    wishlist,
    products
})