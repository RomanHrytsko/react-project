import {SET_STATE} from "../action-types";

export const setState =(payload)=> ({type:SET_STATE, payload})

export const fetchItemList= ()=>async (dispatch)=>{
    try{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json()
    dispatch(setState(data))
    }catch (e){
        console.error(e)
    }

}