import React, {useState, useMemo, memo, useCallback} from "react";


const Test = memo(({name, sorted}) => {
    const [counter, setCounter] = useState(0)
    console.log('test was rerendered')

    return (
        <h2 onClick={() => setCounter((prev) => prev + 1)}>Counter {counter} {name}</h2>
    );
});

export default function UseCallback() {
    const [arr, setArr] = useState([1, 3, 555, 323, 4])
    const [sortOrder, setSortOrder] = useState('desc')
    const [isVisible, setVisible] = useState(false)
    const totalPrice1 = useMemo(() => {
        return arr.reduce((acc, el) => (acc += el), 0)
    }, [arr])
    const sorted = useMemo(() => {
        const arrClone = [...arr]
        if (sortOrder === 'asc') {
            return arrClone.sort((a, b) => a - b)
        }
        if (sortOrder === 'desc') {
            return arrClone.sort((a, b) => b - a)
        }

    }, [arr, sortOrder])
    console.log(sorted)
    const sum = () => {
        setArr([...arr, Math.random()])
        console.log(arr)
    }
    const fnHandler = useCallback(() => {
        console.log('sda')
    }, [sorted])
    return (
        <div>
            <button onClick={sum}>Push random numb</button>
            <button onClick={() => setVisible(!isVisible)}>toggle</button>


            <button onClick={() => setSortOrder((prev) => prev === 'desc' ? 'asc' : 'desc')}>sort</button>
            <h1>Sum: {totalPrice1}</h1>
            {isVisible && <Test name='test' onClick={fnHandler}/>}
        </div>
    );
}