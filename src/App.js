import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import './App.css'
import {ADD, REMOVE} from "./redux/action-type";

export default function App()  {

    const dispatch = useDispatch()
    const ElementAdd = useSelector((state) => {
        return state
    })

    const randomInt = (max) =>  {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const addHendler = (ev) => {
        ev.preventDefault()

        const name = ev.target[0].value
        dispatch({type:ADD ,payload: {id:randomInt(20),name}})
    }
    // const removeUser = (ev, payload) =>{
    //     ev.preventDefault()
    //     dispatch({type:REMOVE, payload})
    //
    //
    // }TODO dont know hove to configure remove
    return (
        <div className={'main'}>
            <h2>User</h2>
            <form onSubmit={addHendler}>
                <input type="text"/>
                <select>
                    {ElementAdd.map(value=>(<option value={value.id}>{value.name}</option>))}
                </select>

                <button >Add User</button>
                <button>Remove User</button>
            </form>

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
