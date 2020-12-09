import React, {Component} from 'react';

class WomanComponent extends Component {
    render() {
        let{item} = this.props
        return (
            <div>
                <h3>
                {item.name}
                </h3>
            </div>
        );
    }
}

export default WomanComponent;