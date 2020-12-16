import React, {Component} from 'react';
import {UsersService} from "../../Services/UsersService";
import InfoAboutUser from "./InfoAboutUser";
import './userStyle.css'

class AllUsersComponent extends Component {
    Form = React.createRef()
    state = {users: [], chosen: []}
    userService = new UsersService()

    async componentDidMount() {
        let users = await this.userService.getAllUser()
        this.setState({users})


    }

    selectThisUser = (id) => {
        let chosen = this.state.users.find(value => value.id === id)
        this.setState({chosen})

    }

    render() {
        let {users, chosen} = this.state


        return (
            <div>
                <form action="" ref={this.Form} className={'form'} onSubmit={(e) => {

                    e.preventDefault()

                    this.selectThisUser(+this.Form.current[0].value)
                }}>
                    <div className={'inputBlock'}>
                        <input type="text" className={'input'}/>
                    </div>
                    <div className={'buttonBlock'}>
                        <button className={'button'}>Find User</button>
                    </div>
                </form>


                <div className={'blockWithUserInfo'}>
                    {chosen && <InfoAboutUser item={chosen} key={chosen.id}/>}
                </div>
            </div>
        );
    }
}

export default AllUsersComponent;