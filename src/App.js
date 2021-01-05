import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import './App.css'
import {ADD} from "./redux/action-type";

export default function App (){
    const dispatch = useDispatch()
    const value = useSelector((state) =>({state}))
    const add = (ev) =>{
        ev.preventDefault()
        const name = ev.target[0].value
        dispatch({type: ADD, payload: {id: Math.random(),name}})

    }
    return (
        <div>
            <div>
                <h1>User</h1>
                <form onSubmit={add}>
                    <input type="text"/>
                    <button>Add</button>
                    <select name="" id="">
                        {value.map(elem => <option value={elem.name}>{elem.name}</option>)}
                    </select>
                    <button>Remove</button>
                </form>
            </div>

        </div>
    );
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
