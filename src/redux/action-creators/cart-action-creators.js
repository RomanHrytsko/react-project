import {TOGGLE_ITEM_TO_CART} from "../action-types";

export  const  toggleItemInCart = (product)=> ({type: TOGGLE_ITEM_TO_CART, payload: product})