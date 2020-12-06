import React, {Component} from 'react';
import UserComp from "../user/UserComp";
import './UserStyle.css';
import {UserService} from "../../services/userService/UserService";

class AllUsersComponents extends Component {

    userService = new UserService()

    state = {users: [], classSet: 'one', choosen: null}

    flag = 'false'

    componentDidMount() {
        this.userService.getAllUSers().then(value => this.setState({users: value}))
    }


    changeColor = () => {
        if (this.flag) {
            this.setState({classSet: 'one'})

        } else {
            this.setState({classSet: 'two'})
        }
        this.flag = !this.flag
    }
    // userId = (id) => {
    //     let chosen = this.state.users.find(value => value.id === id)
    //     this.setState({chosen})
    // }

    userId = (id) =>{
        this.userService.getUSerById(id).then(value => this.setState({choosen:value}))
    }

    render() {
        let {users, classSet, choosen} = this.state
        return (
            <div>
                <h1 onClick={this.changeColor} className={classSet}>All Users Components</h1>
                {
                    users.map(value => (<UserComp item={value} key={value.id} userId={this.userId}/>))
                }
                <hr/>
                {
                    choosen && (<UserComp item={choosen}/>)
                }

            </div>
        );
    }
}

export default AllUsersComponents;