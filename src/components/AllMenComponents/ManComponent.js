import React, {Component} from 'react';

class ManComponent extends Component {
    render() {
        let{item} = this.props
        return (
            <div>
                {item.name}- {item.id}
            </div>
        );
    }
}

export default ManComponent;