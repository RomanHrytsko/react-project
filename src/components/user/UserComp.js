import React, {Component} from 'react';

class UserComp extends Component {


    render() {

        let {item, userId} = this.props
        return (
            <div>
                {item.name}-{item.id}
                <button onClick={() => userId(item.id)}>Choice me</button>
            </div>
        );
    }
}

export default UserComp;