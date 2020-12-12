import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class UserComponent extends Component {

    render() {
        let{item, match:{url}} = this.props

        return (
            <div>
                {item.name} - <Link to={url + '/' + item.id}>Users details</Link>

            </div>
        );
    }
}

export default withRouter(UserComponent);