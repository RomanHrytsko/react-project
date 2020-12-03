import React, {Component} from 'react';
import UserComp from "../user/UserComp";
import './UserStyle.css';
class AllUsersComponents extends Component {



state = {users: [] , classSet: 'one', choosen:null}

    flag = 'false'

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(usersFromAPI =>{
            this.setState({users: usersFromAPI})
            }
        )
}
changeColor = () =>{
    if(this.flag){
        this.setState({classSet: 'one'})

    }else{
        this.setState({classSet:'two'})
    }
    this.flag = !this.flag
}
userId = (id) => {
    let chosen = this.state.users.find(value => value.id === id)
    this.setState({chosen})
}
    render() {
       let {users,classSet, chosen } = this.state
        return (
            <div>
                <h1 onClick={this.changeColor} className={classSet}>All Users Components</h1>
                {
                    users.map(value => (<UserComp item={value} key={value.id} userId={this.userId}/>))
                }
                <hr/>
                {
                    chosen && (<UserComp item={chosen}/>)
                }

            </div>
        );
    }
}

export default AllUsersComponents;