import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {incCounter, decCounter, resetCounter, fetchTodos} from "./redux";

export default function App() {
    const {counter, todos} = useSelector(({counter: {counter}, todos: {todos}}) => ({counter, todos}))
    const dispatch = useDispatch()


    const inc = () => dispatch(incCounter())
    const dec = () => dispatch(decCounter())
    const reset = () => dispatch(resetCounter())

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    // const fetchData = async () => {
    //
    // }
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
            <button onClick={reset}>RESET</button>
            {todos.map(todo => (
                    <h2>{todo.id} - {todo.title}</h2>
                )
            )}
            <h2>{todos.id}-{todos.title}</h2>
        </div>
    );
}