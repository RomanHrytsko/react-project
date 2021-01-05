import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import './App.css'

export default function App()  {

    const ElementAdd = useSelector((state) => {
        return state
    })
    console.log(ElementAdd)
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




























// import {ADD, REMOVE} from "./redux/action-type";
// // input
// // button 'ADD'
// // selected
// // button 'Remove'
//
//
// export default function App() {
//
//     const inputAdd = useSelector((state) => state)
//     const dispatch = useDispatch()
//     console.log(inputAdd)
//
//     const randomInt = (max) => {
//         return Math.floor(Math.random() * Math.floor(max));
//     }
//
//     const add = (ev) => {
//         ev.preventDefault()
//         const name = ev.target[0].value
//         dispatch({type: ADD, payload: {id: randomInt(20), name}})
//     }
//     const remove = (ev) => {
//         ev.preventDefault()
//
//
//     }
//     return (
//         <div className='block'>
//             <h2>User</h2>
//             <form onSubmit={add}>
//                 <input type="text"/>
//                 <button>ADD</button>
//             </form>
//
//             <form onSubmit={remove}>
//                 <select>
//                     {inputAdd.map(value => (<option key={value.id} value={value.id}>{value.name}</option>))}
//                 </select>
//                 <button>Delete</button>
//             </form>
//             {/*<div className={'userInfo'}>*/}
//             {/*    {*/}
//             {/*        inputAdd.map(value=> (*/}
//             {/*            <div className={'userId'} >*/}
//             {/*                <h2>ID: {value.id}</h2>*/}
//             {/*                <h2>NAME: {value.name}</h2>*/}
//             {/*                <form >*/}
//             {/*                <button>remove user</button>*/}
//             {/*                </form>*/}
//
//             {/*            </div>))*/}
//             {/*    }*/}
//
//             {/*</div>*/}
//
//         </div>
//     )
//
// }
