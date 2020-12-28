import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {incCounter, decCounter, resetCounter, fetchTodos} from "./redux";

export default function App() {

    const {todos, counter} = useSelector(({counter: {counter}, todos: {todos}}) => ({todos, counter}))
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch (fetchTodos())
    }, [dispatch])

    const inc = () => dispatch(incCounter())
    const dec = () => dispatch(decCounter())
    const reset = () => dispatch(resetCounter())
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
            <button onClick={reset}>RESET</button>
            {todos.map(todos => (
                <h2>{todos.id}-{todos.title}</h2>
            ))}

        </div>
    );
}
