import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class PersonComponent extends Component {
    render() {
        let {item} = this.props


        console.log(item)
        return (
            <div>
                {item.name} <br/>

            </div>
        );
    }
}

export default withRouter(PersonComponent);