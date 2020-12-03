import React, {Component} from 'react';
import UserComponent from "./components/user/UserComponent";
import AllUsersComponents from "./components/AllUsersComponents/AllUsersComponents";
import AllCommentsComponents from "./components/AllComentsComponent/AllCommentsComponents";


class App extends Component {

    render() {
        return (
            <div>
                {
                    <AllCommentsComponents/>
                }
            </div>
        )
    }
}

export default App;