import React, {Component} from 'react';
import AllUsersComponents from "./components/UserComponents/AllUsersComponents";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllPostsComponents from "./components/PostsComponents/AllPostsComponents";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>
                            posts
                        </Link>
                    </div>
                    <Switch>
                        <Route path={'/users'} render={()=>{
                           return <AllUsersComponents/>
                        }}>

                        </Route>
                        <Route path={'/posts'}  render={()=>{
                            return <AllPostsComponents/>
                        }}>
                        </Route>
                    </Switch>


                </div>
            </Router>
        )
    }
}

export default App;