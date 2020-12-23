import React, {useState} from 'react'

export default function UseStateByMyself() {
    const [counter, setCounter] = useState(0)
    const increaser = () => {
    setCounter((prev) => prev + 1)
    }
    const decreaser=()=>{
        setCounter((prev) => prev - 1)
    }
    const reset = () => {
        setCounter(0)
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={increaser}>Increase</button>
            <button onClick={decreaser}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}