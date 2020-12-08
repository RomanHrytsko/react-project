import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    withRouter
} from "react-router-dom";

class UserComponent extends Component {
    render() {

        let {match:{url}, item} = this.props
        return (
            <div>
                {item.id} - {item.name} - <Link to={`${url}/${item.id}`}>Info</Link>

            </div>
        );
    }
}

export default withRouter(UserComponent) ;