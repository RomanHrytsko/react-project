import React, {Component} from 'react';

class PersonComponent extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {item.name}
            </div>
        );
    }
}

export default PersonComponent;