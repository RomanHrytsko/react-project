import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class PersonComponent extends Component {


    render() {

        let {item, match: {url}} = this.props


        return (
            <div className='navigatorBLock'>
                {item.name} <br/>
                <Link to={url + '/' + item.id + '/'}>Info about hero</Link>


            </div>
        );
    }
}

export default withRouter(PersonComponent);