import React, {Component} from 'react';

class PairComponent extends Component {

    render() {
        let {item,findPair} = this.props
        return (
            <div>

                    {findPair}


            </div>
        );
    }
}

export default PairComponent;