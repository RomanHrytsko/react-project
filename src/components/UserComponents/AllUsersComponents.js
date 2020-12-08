import React, {Component} from 'react';
import {UserService} from "../../services/UserService/UserService";
import UserComponent from "./UserComponent";

class AllUsersComponents extends Component {
    state = {users: []}
    userService = new UserService()

    async componentDidMount() {
        let users = await this.userService.getAllUser()
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