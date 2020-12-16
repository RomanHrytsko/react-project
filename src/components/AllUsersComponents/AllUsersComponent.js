import React, {Component} from 'react';
import {UsersService} from "../../Services/UsersService";
import UserComponent from "./UserComponent";

class AllUsersComponent extends Component {
state = {users:[], findedId:null}
usersService = new UsersService()
    async componentDidMount() {
    let users = await this.usersService.getAllUser()
        this.setState({users})
    }

    render() {
    let{users} = this.state
        return (
            <div>
                {users.map(value => <UserComponent item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default AllUsersComponent;