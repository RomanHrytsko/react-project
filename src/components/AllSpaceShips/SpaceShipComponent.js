import React, {Component} from 'react';
import './SpaceShipStyle.css'
import {Link, withRouter} from "react-router-dom";

class SpaceShipComponent extends Component {

    render() {
        let{item} = this.props
        let{match:{url}} = this.props
        return (
            <div className='navigatorBLock' >
                {item.name} <br/>
                <Link to={url + '/' + item.id}>SpaceShip Info</Link>
            </div>
        );
    }
}

export default withRouter(SpaceShipComponent);