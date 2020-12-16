import React, {Component} from 'react';
import AllUsersComponent from "./components/AllUsersComponents/AllUsersComponent";
import {UsersService} from "./Services/UsersService";


class App extends Component {
    Form = React.createRef()
state={users:[],findedId: null,chosenUser: null}
 usersService = new UsersService()
componentDidMount() {
    let{findedId} = this.state
        // fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => {
        //     this.setState({users:value})
        // })
     let chosenUser = this.usersService.getUserById(findedId)
    this.setState({chosenUser})

    }


    render() {
        let{findedId} = this.state
        return (
            <div>
                <form action="">
                <input placeholder={'set user ID'}/> <button>Find User</button>
                <AllUsersComponent/>
                </form>

            </div>
        )
    }
}

export default App;