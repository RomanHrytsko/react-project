import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsersComponent from "./components/AllUsersComponents/AllUsersComponent";

class App extends Component {

    render() {

        return (
            <Router>
            <div>
                {
                <Link to={'/users'}>Users</Link>
                }
            </div>
                <Switch>
                    <Route path={'/users'} render={()=>{
                        return <AllUsersComponent/>
                    }}/>
                </Switch>
            </Router>
        )
    }
}

export default App;