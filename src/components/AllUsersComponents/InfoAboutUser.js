import React, {Component} from 'react';
import {UsersService} from "../../Services/UsersService/UsersService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class InfoAboutUser extends Component {
    state = {user: null}
    usersService = new UsersService()

    async componentDidMount() {
        let {match: {params: {id}}} = this.props
        let user = await this.usersService.getUserById(id)
        this.setState({user})
    }

    render() {
        let {user} = this.state
        return (
            <div>
                {user && <div className={'userInfoBlock'}>
                    <span>{user.name}</span>
                    <br/>
                    <span className={'userName'}>{user.username}</span>
                    <br/>
                    <hr/>
                    <span><b>Phone: </b>{user.phone}</span>
                    <br/>
                    <hr/>
                    <span><b>Email: </b>{user.email}</span>
                    <br/>
                    <hr/>
                    <span><b>Website: </b>{user.website}</span>
                </div>}
            </div>
        );
    }
}

export default withRouter(InfoAboutUser);