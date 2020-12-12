import React, {Component} from 'react';
import AllUsersComponents from "./components/AllUSersComponent/AllUsersComponents";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserComponent from "./components/AllUSersComponent/UserComponent";


class App extends Component {

    render() {

        return (
            <Router>
                <div>

                    <ul>
                        <li>
                            <Link to={'/users'}>info</Link>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <AllUsersComponents/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;