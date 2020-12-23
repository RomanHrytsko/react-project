import React, {useState, useEffect} from 'react'

export default function UseEffect() {
    const [user, setUser] = useState({name: 'a', age: 30})
    const [counter, setCounter] = useState(1)
    const [todo, setTodo] = useState()
    useEffect(() => {
        console.log('i was called')
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => setTodo(json))
    }, [counter])
    const onClickHandler =()=>setCounter((prev)=> prev + 1
    )
    // const Dercement = () => {
    //     setUser((prev) => ({
    //         ...prev,
    //         age: user.age - 1
    //     }))
    // }
    // const onClickHandler = () => {
    //     setUser((prev) => ({
    //         ...prev,
    //         age: user.age + 1
    //     }))
    // }
    // const ChangeName=()=>{
    //     setUser((prev)=>({
    //         ...prev,
    //         name: user.name + '!'
    //     }))
    // }
    return (
        <div className={'App'}>
            <button onClick={onClickHandler}>Increase</button>
            <h2>Changed id: {counter}</h2>
            {!!todo &&(
                <>
                    <h2>{todo.id}</h2>
                    <h2>{todo.title}</h2>
                    <h2>{todo.completed.toString()}</h2>
                </>
            )}
            {/*<button onClick={Dercement}>Decrease</button>*/}
            {/*<button onClick={ChangeName}>Change name</button>*/}
            {/*<h2>counter name: {user.name}</h2>*/}
            {/*<h2>counter age: {user.age}</h2>*/}
        </div>
    );
}