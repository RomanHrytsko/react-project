import {TOGGLE_ITEM_TO_WISHLIST} from "../action-types";

export const toggleItemInWishlist = (product)=>({type:TOGGLE_ITEM_TO_WISHLIST, payload: product})