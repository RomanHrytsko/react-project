import React, {Component} from 'react';
import UserComponent from "./UserComponent";
import {UserService} from "../../Services/UserService/UserService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    withRouter
} from "react-router-dom";
import InfoAboutUser from "./InfoAboutUser";


class AllUsersComponents extends Component {
    state = {users: []}
    userService = new UserService()

    async componentDidMount() {
        let users = await this.userService.getAllUsers()
        this.setState({users})
    }

    render() {
        let {users} = this.state
        let {match:{url}} = this.props
        console.log()
        return (
            <div>
                <div>
                    {
                        users.map(value => <UserComponent item={value} key={value.id}/>)
                    }
                </div>
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let{match:{params:{id}}} = props


                        return <InfoAboutUser {...props} key={id}/>

                    }}/>
                </Switch>
                <hr/>
            </div>

        );
    }
}

export default withRouter(AllUsersComponents);