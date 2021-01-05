import {SET_PRODUCTS} from "../action-types";

const initialState = {
    products:[]
}

export default (state = initialState, action) =>{
    switch (action.type){
        case SET_PRODUCTS: {
            return {...state}
        }
        default: return {...state}
    }
}