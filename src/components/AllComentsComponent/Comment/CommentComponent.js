import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {
        let {item}= this.props
        return (
            <div>

                {`User name: ${item.name}`}
                <br/>
                {`User email: ${item.email}`}
                <br/>
                {`User text: ${item.body}`}
                <br/>
                {`User id: ${item.id}`}
                <hr/>

            </div>
        );
    }
}

export default CommentComponent;