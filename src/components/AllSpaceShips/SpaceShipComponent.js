import React, {Component} from 'react';
import './SpaceShipeStyle.css'
class SpaceShipComponent extends Component {
    render() {
        let{item} = this.props
        return (
            <div className='navigatorBLock' >
                {item.name}
            </div>
        );
    }
}

export default SpaceShipComponent;