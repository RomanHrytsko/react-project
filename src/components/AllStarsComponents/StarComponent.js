import React, {Component} from 'react';
import "./StarsStyles.css"
class StarComponent extends Component {
    render() {
        let{item} = this.props
        return (
            <div>
                <div className='one-Star' >
                {item.name}
                <button >Chose Hero</button>
                </div>
            </div>
        );
    }
}

export default StarComponent;