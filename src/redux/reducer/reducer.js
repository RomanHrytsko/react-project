import {ADD} from "../action-type";

const initialState = []

export const reducer = (state = initialState, action) => {
switch (action.type){
    case ADD: {
        state.push(action.payload)
        return{...state}
    }
    default: return {...state}
}

}

// import {ADD, REMOVE} from "../action-type";
//
// const initialState = []
//
// export const reducer  = (state = initialState, action)=>{
//     switch (action.type){
//
//         case ADD:{
//             state.push(action.payload)
//             return{...state}
//         }
//         case REMOVE: {
//             // const filter = state.filter(value => value.id !== action.payload)
//             return {...state}
//         }
//         default: return state
//     }
//
// }