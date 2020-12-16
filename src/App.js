import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsersComponent from "./components/AllUsersComponents/AllUsersComponent";
import './App.css'
import ReactHomePageComponent from "./components/ReacHomePageComponents/ReactHomePageComponent";

class App extends Component {

    render() {

        return (
            <Router>
                <div>
                    <div className={'header'}>
                        <div className={'react-icon'}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react-icon"/>
                        </div>
                        <div className={'homeLink'}>
                            <Link to={''}>Home</Link>
                        </div>
                        <div className={'userLink'}>
                        <Link to={'/users'}>Users</Link>
                        </div>
                    </div>

                </div>
                <Switch>
                    <Route path={'/users'} render={() => {
                        return <AllUsersComponent/>
                    }}/>
                    <Route path={''} render={() => {
                        return <ReactHomePageComponent/>
                    }}/>
                </Switch>
            </Router>
        )
    }
}

export default App;