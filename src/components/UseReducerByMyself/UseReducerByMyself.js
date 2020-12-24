import React, {useState, useEffect, useReducer} from 'react'

const reduce = (state, action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return action.payload
        }
        case  'SET_PHONE': {
            return {
                ...state,
                phone: state.phone + ' !'
            }
        }
        case 'SET_EMAIL': {
            return {
                ...state,
                email: state.email + ' changed'
            }
        }
        default: {
            return state
        }
    }
}
const initialState = {
    name: null,
    id: null,
    email: null,
    phone: null,
}


export default function UseReducerByMyself() {
    const [state, dispatch] = useReducer(reduce, initialState)
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
            .then(value => value.json())
            .then(usersFromApi => {
                dispatch({type: 'SET_USERS', payload: usersFromApi})
            })
    }, [counter])
    const changeId = () => {
        setCounter((prev) => prev + 1)
    }
    const changeEmail = () => {
        dispatch({type: 'SET_EMAIL'})
    }
    const changePhone = () => {
        dispatch({type: 'SET_PHONE'})
    }

    return (
        <div>
            <button onClick={changeId}>Change id</button>
            <button onClick={changeEmail}>Change Email</button>
            <button onClick={changePhone}>Change Phone</button>

            {
                !!state &&
                <>
                    <h2>Name: {state.name}</h2>
                    <h2>Id: {state.id}</h2>
                    <h2>Email: {state.email}</h2>
                    <h2>Phone: {state.phone}</h2>
                </>
            }
        </div>
    );
}