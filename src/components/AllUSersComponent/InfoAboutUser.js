import React, {Component} from 'react';
import {UserService} from "../../Services/UserService/UserService";

class InfoAboutUser extends Component {
    state = {user: null}
    userService = new UserService()

    async componentDidMount() {
        let{match:{params:{id}}} = this.props
        let user = await this.userService.getUser(id)
        this.setState({user})
    }

    render() {

        let {user} = this.state
        return (
            <div>
                {user && <div>{user.id}-{user.name}-{user.email}</div>}
            </div>
        );
    }
}

export default InfoAboutUser;