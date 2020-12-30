import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css'

export default function App()  {

  const ElementAdd = useSelector((state) => {
      console.log(state)
      return state
  })
    const randomInt = (max) =>  {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const dispatch = useDispatch()
    const addHendler = (ev) => {
      ev.preventDefault()
        const name = ev.target[0].value
        dispatch({type:'ADD' ,payload: {id:randomInt(20),name}})
    }
    const removeUser = (ev) =>{
      ev.preventDefault()


    }
        return (
            <div className={'main'}>
                <h2>User</h2>
                <form onSubmit={addHendler}>
                    <input type="text"/>
                    <select>
                        {ElementAdd.map(value=>(<option value={value.id}>{value.name}</option>))}
                    </select>

                    <button >Add User</button>

                </form>
                <div className={'userInfo'}>
                    {ElementAdd.map(value=>(
                        <div className={'userInfo'}>
                            <h2>Name: {value.name}</h2>
                            <h2>Id: {value.id}</h2>
                            <button value={value.id}>remove user</button>

                        </div>
                    ))}
                </div>
            </div>
        )

}

