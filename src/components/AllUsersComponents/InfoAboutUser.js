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
        let {match:{params:{id}}} = this.props
        let user = await this.usersService.getUserById(id)
        this.setState({user})
    }

    render() {
        let {user} = this.state
        return (
            <div>
                {user && <div>{user.id} - {user.name} - {user.email}</div>}
            </div>
        );
    }
}

export default withRouter(InfoAboutUser);