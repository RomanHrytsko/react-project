import React, {useState, useEffect} from 'react'


const Test = () => {
    useEffect(() => {
        console.log('mount')
        const interval = setInterval(() => {console.log('from interval')}, 1000)
        return () => {
            clearInterval(interval)
            console.log('unmount')
        }
    }, [])
    return (
        <h2>Timer</h2>
    )
}

export default function UseEffectByMyself() {
    const [counter, setCounter] = useState(1)
    const [user, setUser] = useState()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
            .then(value => value.json())
            .then(userFromJson => setUser(userFromJson))
    }, [counter])



    const increase = () => {
        setCounter((prev) => prev + 1)
    }
    const decrease = () => {
        if (counter <= 1) {
            setCounter(1)

        } else {
            setCounter((prev) => prev - 1)
        }
    }
    const [isVisible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            {!!user &&
            <>
                <h2>Name: {user.name}</h2>
                <h2>Id: {user.id}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Phone: {user.phone}</h2>
            </>

            }
            <button onClick={() => setVisible(!isVisible)}>Toggle</button>
            {isVisible && <Test/>}

        </div>
    );
}