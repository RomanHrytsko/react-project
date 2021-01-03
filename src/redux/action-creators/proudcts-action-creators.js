import {SET_PRODUCTS} from "../action-types";
import {services} from "../../services";

    const {productService} = services
export const setProducts = ()=> async (dispatch) =>{
        const response = await productService.getProducts()
        const json = await response.json()
    dispatch({type: SET_PRODUCTS, payload: json})
}