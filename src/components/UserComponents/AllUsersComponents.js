import React, {Component} from 'react';
import {UserService} from "../../services/UserService/UserService";

class AllUsersComponents extends Component {
    state ={users:[]}
    userService = new UserService()

    componentDidMount() {
        let  users = this.userService.getAllUser()
       return  this.setState({users})
    }

    render() {
        let{users} = this.state
        return (
            <div>
                {
                    users.map(value => <UserService item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsersComponents;