import React, {Component} from 'react';
import AllUsersComponents from "./components/UserComponents/AllUsersComponents";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllPostsComponents from "./components/PostsComponents/AllPostsComponents";
import AllTodosComponennts from "./components/AllTodosComponents/allTodosComponennts";

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
                    <div>
                        <Link to={'/todos'}>
                            todos
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
                        <Route path={'/todos'} render={()=>{
                            return <AllTodosComponennts/>
                        }}>

                        </Route>
                    </Switch>


                </div>
            </Router>
        )
    }
}

export default App;