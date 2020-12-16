import React, {Component} from 'react';
import UserComponent from "./UserComponent";
import FullUsers from "./FullUsers";

class AllUsersComponents extends Component {




    render() {
        let {items:users} = this.props

        return (
            <FullUsers items={users}/>
        );
    }
}

export default AllUsersComponents;