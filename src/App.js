import React, {Component} from 'react';
import AllUsersComponents from "./components/AllUSersComponent/AllUsersComponents";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserComponent from "./components/AllUSersComponent/UserComponent";
import AllCommentsComponent from "./components/CommentsComponents/AllCommentsComponent";
import AllPostsComponent from "./components/AllPostsComponents/AllPostsComponent";


class App extends Component {

    render() {

        return (
            <Router>
                <div>

                    <ul>
                        <li>
                            <Link to={'/users'}>All users</Link>
                        </li>
                        <li>
                            <Link to={'/comments'}>All comments</Link>
                        </li>
                        <li>
                            <Link to={'/posts'}> All posts</Link>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <AllUsersComponents/>
                        }}/>
                        <Route path={'/comments'} render={()=>{
                            return <AllCommentsComponent/>
                        }}/>
                        <Route path={'/posts'} render={()=>{
                            return <AllPostsComponent/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;