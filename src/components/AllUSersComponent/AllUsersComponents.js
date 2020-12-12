import React, {Component} from 'react';
import UserComponent from "./UserComponent";
import {UserService} from "../../Services/UserService/UserService";

class AllUsersComponents extends Component {
    state = {users: []}
userService = new UserService()
    async componentDidMount() {
      let users = await  this.userService.getAllUsers()
       this.setState({users})
    }

    render() {
        let {users} = this.state
        return (
            <div>
                {
                    users.map(value => <UserComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsersComponents;