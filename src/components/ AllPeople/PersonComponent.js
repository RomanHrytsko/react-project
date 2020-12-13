import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class PersonComponent extends Component {
    render() {
        let {item} = this.props
        console.log(this.props)
        return (
            <div>
                {item.name} <br/>
                <Link to={item.url}>Hero info</Link>
            </div>
        );
    }
}

export default withRouter(PersonComponent);