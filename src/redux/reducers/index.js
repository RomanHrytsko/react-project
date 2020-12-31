import {combineReducers} from "redux";
import cart from './cart'
import wishlist from "./wishlist";
import products from "./products";
export const reducer = combineReducers({
    cart ,
    wishlist,
    products,
})