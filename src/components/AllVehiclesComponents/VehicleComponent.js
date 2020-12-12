import React, {Component} from 'react';

class VehicleComponent extends Component {
    render() {
        let{item} = this.props
        return (
            <div className='navigatorBLock'>
                {item.name}
            </div>
        );
    }
}

export default VehicleComponent;