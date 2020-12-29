import {SET_TODOS,TOGGLE_TODOS,REMOVE_TODOS} from '../action-types'

export const setTodos = (payload) => ({type:SET_TODOS, payload})
export const fetchTodos =()=>async (dispatch)=> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        dispatch(setTodos(data))
    } catch (e) {
        console.error(e)
    }
}