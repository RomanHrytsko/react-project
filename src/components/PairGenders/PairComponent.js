import React, {Component} from 'react';

class PairComponent extends Component {

    render() {
        let {item} = this.props
        return (
            <div>
                {item.name}

            </div>
        );
    }
}

export default PairComponent;