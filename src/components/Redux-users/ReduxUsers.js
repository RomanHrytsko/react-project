import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'


export default function ReduxUsers() {
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()
    const user = useSelector((state) => state)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
            .then(value => value.json())
            .then(usersFromApi => {
                dispatch({type: 'SET_USER', payload: usersFromApi})
            })
    }, [counter])
    const changeUser = () => {
        if (counter >= 10) {
            setCounter(10)
        } else {

            setCounter((prev) => prev + 1)
        }
    }
    const rollBackUser = () => {
        if (counter <= 1) {
            setCounter(1)
        } else {

            setCounter((prev) => prev - 1)
        }
    }


    return (
        <div>
            {
                user &&
                <>
                    <h2>Name: {user.name}</h2>
                    <h2>Id: {user.id}</h2>
                    <h2>Phone: {user.phone}</h2>
                    <h2>Email: {user.email}</h2>
                </>
            }
            <button onClick={changeUser}>Change User</button>
            <button onClick={rollBackUser}>Rollback User</button>
            <button onClick={() => {
                dispatch({type: 'CHANGE_NAME'})
            }}>Change name
            </button>
            <button onClick={() => {
                dispatch({type: 'CHANGE_ID'})
            }}>Change id
            </button>
            <button onClick={() => {
                dispatch({type: 'CHANGE_PHONE'})
            }}>Change phone
            </button>
            <button onClick={() => {
                dispatch({type: 'CHANGE_EMAIL'})
            }}>Change email
            </button>
        </div>
    );
}