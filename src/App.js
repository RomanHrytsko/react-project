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
    const dispatch = useDispatch()
    const add = (ev)=> {
        ev.preventDefault()
        const name = ev.target[0].value
        dispatch({type: ADD, payload: {id: Math.random(), name}})
    }
    const remove =(ev)=>{
    ev.preventDefault()

    const removeEl = ev.target[0]
    dispatch({type:REMOVE, payload: ev.target[0].value} )
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

            </div>
        )

}
