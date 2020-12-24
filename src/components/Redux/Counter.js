import React from "react";
import {useSelector} from 'react-redux'

export default function Counter() {
    const counter = useSelector((state) => {
        console.log(state)
    })
    return (
        <div>
            <h2>Hello {counter}</h2>
        </div>
    );
}