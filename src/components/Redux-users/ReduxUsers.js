import React from "react";
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'


export default function ReduxUsers() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state
    )
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
            .then(value => value.json())
            .then(usersFromApi => {
                dispatch({type: 'SET_USERS', payload: usersFromApi})
            })
    }, [counter])
    const changeUser = () => {
        if (counter >= 10) {
            setCounter(10)
        } else {

            setCounter((prev) => prev + 1)
        }
    }
    const rollback = () => {
        if (counter <= 1) {
            setCounter(1)
        } else {

            setCounter((prev) => prev - 1)
        }
    }
    let name
    return (
        <div>{
            user &&
            <>
                <h2 className={name}>Name: {user.name}</h2>
                <h2>Id: {user.id}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Phone: {user.phone}</h2>
            </>
        }
            <button onClick={changeUser}>Change user</button>
            <button onClick={rollback}>Rollback user</button>
            <button onClick={() => {
                dispatch({type: 'CHANGE_PHONE'})
            }}>change user phone
            </button>

            <button onClick={() => {
                if(user.name === user.name + ' nameChanged'){
                    name = 'userBlocked'

                }else{

                dispatch({type: 'CHANGE_USER_EMAIL'})
                }
            }}>change user email
            </button>
            <button onClick={() => {
                dispatch({type: 'CHANGE_USER_NAME'})
            }}>change user name
            </button>
            <button onClick={() => {
                dispatch({type: 'INC_USER_ID'})
            }}>change user id
            </button>
        </div>
    );
}