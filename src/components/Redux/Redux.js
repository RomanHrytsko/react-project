import React from "react";
import ReactDom from 'react-dom'
import {createStore} from "redux";
import {Provider} from 'react-redux'

import Counter from "./Counter";

const initialState = {
    counter: 0,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER': {
            return {...state, counter: state.counter + 1}
        }
        case 'DEC_COUNTER': {
            return {...state, counter: state.counter - 1}
        }
        case 'RESET': {
            return {...state, counter: 0}
        }
        default: {
            return state
        }
    }

}
const store = createStore(reducer)

const rootElement = document.getElementById('root')
ReactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            <Counter/>

        </Provider>
    </React.StrictMode>,
    rootElement
)
export default function Redux() {

    return (
        <div>

        </div>
    );
}
