import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialState = {
    name:null,
    id: 0,
    email: null,
    phone: null,

}
const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'SET_USERS':{
            return action.payload
        }
        case 'INC_USER_ID':{
            return{
                ...state,
                id: state.id + 1
            }
        } case 'CHANGE_USER_EMAIL':{
            return{
                ...state,
                email: state.email = ' email was changed'
            }
        } case 'CHANGE_USER_NAME':{
            return{
                ...state,
                name: state.name = ' nameChanged'
            }
        } case 'CHANGE_PHONE':{
            return{
                ...state,
                phone: state.phone = ' phone was changed'
            }
        }
        default:{
            return state
        }
    }
}

const store = createStore(reducer)
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
