import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {PeopleService} from "../../services/PeopleService/PeopleService";


class PersonComponent extends Component {


    render() {

        let {item, id} = this.props
        let {match: {url}} = this.props

        return (
            <div>
                {item.name} <br/>
                <Link to={url + id}>Info about hero</Link>


            </div>
        );
    }
}

export default withRouter(PersonComponent);