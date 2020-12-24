import React, {useState, useMemo} from "react";

export default function UseMemo() {
    const [arr, setArr] = useState([1, 3, 555, 323, 4])
    const [sortOrder, setSortOrder] = useState('desc')
    const totalPrice1 = useMemo(()=>{
        return arr.reduce((acc, el) => (acc += el), 0)
    }, [arr])
    const sorted = useMemo(()=>{
        const arrClone = [...arr]
        if(sortOrder === 'asc'){
            return arrClone.sort((a,b) => a - b)
        }
        if(sortOrder === 'desc'){
            return  arrClone.sort((a,b) => b - a)
        }

    }, [arr, sortOrder])
    console.log(sorted)
const sum = () =>{
        setArr([...arr, Math.random()])
    console.log(arr)
}
    return (
        <div>
            <button onClick={sum}>Push random numb</button>


            <button onClick={() => setSortOrder((prev) => prev === 'desc'? 'asc' : 'desc')}>change</button>
            <h1>Sum: {totalPrice1}</h1>
        </div>
    );
}