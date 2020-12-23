import React, {useState} from 'react'

export default function UseState() {
    const [counter, setCounter] = useState({name: "a", age: 30})

    const onClickHandler = () => {
        setCounter((prev)=>({
            ...prev,
            age: counter.age + 1
        }))
    }
    const Dercement = () => {
        setCounter((prev)=>({
           ...prev,
           age: counter.age - 1
        }))


    }
    const reset = () => {
        setCounter(0)
    }
    return (

        <div className={'App'}>
            <button onClick={onClickHandler}>Increase</button>
            <button onClick={Dercement}>Decrease</button>
            <button onClick={reset}>Reset</button>
            {/*<h1>Counter value: {counter} </h1>*/}
            <h2>counter name: {counter.name}</h2>
            <h2>counter age: {counter.age}</h2>
        </div>
    );
}