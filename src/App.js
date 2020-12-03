import React, {Component} from 'react';
import UserComponent from "./components/user/UserComponent";
import AllUsersComponents from "./components/AllUsersComponents/AllUsersComponents";


class App extends Component {

    render() {
        return (
            <div>
                {
                    <AllUsersComponents/>
                }
            </div>
        )
    }
}

export default App;