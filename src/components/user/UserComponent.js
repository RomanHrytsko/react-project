import React, {Component} from 'react';
import './usetCss.css'
class UserComponent extends Component {
    render() {
        let {item, clsName} = this.props


        return (

            <div>
                <h3>
                    {item.name}-{item.status.toString()}
                </h3>
            </div>
        );
    }
}

export default UserComponent;