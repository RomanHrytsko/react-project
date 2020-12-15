import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class VehicleComponent extends Component {
    render() {
        let{item} = this.props
        let{match:{url}} = this.props
        return (
            <div className='navigatorBLock'>
                {item.name} <br/>
                <Link to={url + '/' + item.id}>Info about vehicle</Link>
            </div>
        );
    }
}

export default withRouter(VehicleComponent);