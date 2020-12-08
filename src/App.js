import React, {Component} from 'react';
import AllUsersComponents from "./components/UserComponents/AllUsersComponents";


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