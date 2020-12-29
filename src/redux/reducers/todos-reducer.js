import {SET_TODOS, TOGGLE_TODOS, REMOVE_TODOS} from "../action-types";

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case TOGGLE_TODOS: {
            return {
                ...state,
               todos: []
            }
        }
        case REMOVE_TODOS: {
            return {
                ...state,
                todos: []
            }
        }
        default: return state

    }

}
export default reducer;