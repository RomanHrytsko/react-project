import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {`Post body: ${item.body}`}
                <br/>
                {`Post title: ${item.title}`}
                <hr/>
            </div>
        );
    }
}

export default PostComponent;