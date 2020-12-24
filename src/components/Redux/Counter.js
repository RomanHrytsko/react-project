import React from "react";
import {useSelector, useDispatch} from 'react-redux'

export default function Counter() {
    const counter = useSelector(({counter}) => counter)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Hello {counter}</h2>
            <button onClick={()=> dispatch({type: "INC_COUNTER"})}>inc</button>
            <button onClick={()=> dispatch({type: "DEC_COUNTER"})}>dec</button>
            <button onClick={()=> dispatch({type: "RESET"})}>res</button>
        </div>
    );
}