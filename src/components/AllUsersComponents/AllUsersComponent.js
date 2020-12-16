import React, {Component} from 'react';
import {UsersService} from "../../Services/UsersService/UsersService";
import UserComponent from "./UserComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import './UsersStyles.css'
import InfoAboutUser from "./InfoAboutUser";

class AllUsersComponent extends Component {
    state = {users: []}
    usersService = new UsersService()
   async componentDidMount() {
        let users = await this.usersService.getAllUser()
        this.setState({users})
    }


    render() {
        let{users}= this.state
        let{match:{url}}= this.props
        return (
            <div>
                <h2 className={'usersArticle'}>Users</h2>
                <div className={'mainBlock'}>
                <div className={'usersBlock'}>
                {
                    users.map(value=> <UserComponent item={value} key={value.id}/>)

                }
                </div>
                   <div className={'InfoAboutUser'}>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let{match:{params:{id}}} = props
                        return <InfoAboutUser {...props} key={id}/>
                    }}/>
                </Switch>
                   </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsersComponent);