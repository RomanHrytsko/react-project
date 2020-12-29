import {combineReducers} from "redux";
import cartReducer from './cart-reducer'
import wishListReducer from './wishListReducer'
import itemListReducer from './item-list-reducer'
export const reducer = combineReducers({
    cart: cartReducer,
    wishList: wishListReducer,
    itemList: itemListReducer
})