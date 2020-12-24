import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialState = {
    name: null,
    id: null,
    phone: null,
    email: null,
}
const reduce = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return action.payload
        }
        case 'CHANGE_NAME': {
            return {
                ...state,
                name: state.name = 'name was changed'
            }
        } case 'CHANGE_ID': {
            return {
                ...state,
                id: state.id = 'id was changed'
            }
        }
        case 'CHANGE_EMAIL': {
            return {
                ...state,
                email: state.email = 'email was changed'
            }
        }
        case 'CHANGE_PHONE': {
            return {
                ...state,
                phone: state.phone = 'phone was changed'
            }
        }
        default: {
            return state
        }
    }
}
const store = createStore(reduce)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
