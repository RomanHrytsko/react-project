import React, {Component} from 'react';
import {UsersService} from "../../Services/UsersService";
import UserComponent from "./UserComponent";
import InfoAboutUser from "./InfoAboutUser";

class AllUsersComponent extends Component {
    state = {users: [], chosen: [], id:''}

    usersService = new UsersService()

    async componentDidMount() {
let{item} = this.props
        console.log(item)
this.setState({id:item})

        let users = await this.usersService.getAllUser()
        this.setState({users})


         await users.forEach(value =>  {
            if (value.id === this.state.id) {

            this.setState({chosen: value})

            }
        })
    }

    render() {
        let {users,chosen} = this.state

        return (
            <div>

                {chosen && <InfoAboutUser item={chosen} key={chosen.id}/>}
            </div>
        );
    }
}

export default AllUsersComponent;