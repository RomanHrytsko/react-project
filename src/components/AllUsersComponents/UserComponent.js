import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class UserComponent extends Component {
    render() {
        let{item}= this. props
        let{match:{url}}= this.props
        return (
            <div>
                {item.id}-{item.name} -<Link to={url +'/' + item.id}>User info</Link>
            </div>
        );
    }
}

export default withRouter(UserComponent);