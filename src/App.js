import React, {Component} from 'react';
import AllUsersComponent from "./components/AllUsersComponents/AllUsersComponent";
import './App.css'

class App extends Component {

    render() {

        return (
            <div className={'mainBlock'}>
            <AllUsersComponent/>

            </div>
        )

    }



}

export default App;