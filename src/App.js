import React, {Component} from 'react';
import AllUsersComponents from "./components/Users/AllUsersComponents";
import {Context} from "./Services/ContextService";


class App extends Component {

    state = {users: []}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value})
            })
    }

    render() {

        let {users} = this.state
        return (
            <Context.Provider value={'sdfdsf'}>
            <div>
                {
                    <AllUsersComponents items={users} key={users.id}/>
                }
            </div>
            </Context.Provider>
        )
    }
}

export default App;