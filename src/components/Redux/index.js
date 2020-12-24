import React from "react";
import {useSelector} from "react-redux";


export default function index() {
    const counter = useSelector(({counter}) => counter)
    return (
        <div>
            <h1>Hello {counter}</h1>
        </div>
    );
}