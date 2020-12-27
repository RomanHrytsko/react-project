import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {INC_COUNTER, RESET_COUNTER, DEC_COUNTER} from "./redux/action-types";

import {incCounter,decCounter,resetCounter} from "./redux/action-creators";

export default function App() {

    // const {todos, counter} = useSelector(({counter: {counter}}, {todos: {todos}}) => ({counter, todos}))
    const test = useSelector((state) => {
        console.log(state)
        return state
        }
    )
    const counter = useSelector(({counter})=> counter.counter)
    const todos = useSelector(({todos})=> todos.todos)
    const storeData = useSelector(({counter:{counter}, todos:{todos}}) => ({todos, counter}))

    const incCounter = () => ({type: 'INC_COUNTER'})
    const decCounter = () => ({type: 'DEC_COUNTER'})
    const resetCounter = () => ({type: 'RESET_COUNTER'})

    const dispatch = useDispatch()
    const handlerInc = () => dispatch(incCounter())
    const handlerDec = () => dispatch(decCounter())
    const handlerReset = () => dispatch(resetCounter())

    return (
        <div>

            <h2>Counter: {storeData}</h2>
            <button onClick={handlerInc}>Inc</button>
            <button onClick={handlerDec}>Dec</button>
            <button onClick={handlerReset}>Reset</button>

        </div>
    );
}