import React, {Component} from 'react';
import AllUsersComponent from "./components/AllUsersComponents/AllUsersComponent";
import {UsersService} from "./Services/UsersService";
import InfoAboutUser from "./components/AllUsersComponents/InfoAboutUser";


class App extends Component {
    Form = React.createRef()
    state = {users: [], chosen: [], inputValue: 1}
    // usersService = new UsersService()

    async componentDidMount() {
        this.setState({inputValue: 1})

    }

    render() {
        let {inputValue} = this.state

        console.log(inputValue)
let id = this.Form.current[0].value
        console.log(id)
        return (
            <div>
                <div>
                    <form action="" ref={this.Form} onSubmit={this.send}>
                        <input placeholder={'set user ID'} />
                        <button>Find User</button>
                        <AllUsersComponent item={inputValue}/>
                    </form>

                </div>



            </div>
        )

    }

    send = (e) => {
        e.preventDefault()
        this.setState({inputValue: this.Form.current[0].value})


    }

}

export default App;