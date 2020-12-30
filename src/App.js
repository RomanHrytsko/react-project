import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {ADD, REMOVE} from "./redux/action-type";
import './App.css'
// input
// button 'ADD'
// selected
// button 'Remove'


export default function App()  {

const inputAdd = useSelector((state) => {
    console.log(state)
    return state
})
    const randomInt = (max) =>  {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const dispatch = useDispatch()
    const add = (ev)=> {
        ev.preventDefault()
        const name = ev.target[0].value
        dispatch({type: ADD, payload: {id: randomInt(20), name}})
    }
    const remove =(ev)=>{
    ev.preventDefault()

    const removeEl = ev.target[0]
    dispatch({type:REMOVE, payload: removeEl.value} )
    }
    return (
            <div className='block'>
                <h2>User</h2>
                <form onSubmit={add}>
                    <input type="text"/>
                    <button>ADD</button>
                </form>

                <form onSubmit={remove}>
                    <select>
                        {inputAdd.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
                    </select>
                    <button>Delete</button>
                </form>
                <div className={'userInfo'}>
                    {
                        inputAdd.map(value=> (
                            <div className={'userId'} >
                                <h2>ID: {value.id}</h2>
                                <h2>NAME: {value.name}</h2>
                                <form >
                                <button>remove user</button>
                                </form>

                            </div>))
                    }

                </div>

            </div>
        )

}
