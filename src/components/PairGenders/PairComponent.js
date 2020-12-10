import React, {Component} from 'react';

class PairComponent extends Component {

    render() {
        let {item,findMan,coupleFind} = this.props
        return (
            <div>
                {item.name}
                <button onClick={()=>coupleFind()}>Check</button>
            </div>
        );
    }
}

export default PairComponent;