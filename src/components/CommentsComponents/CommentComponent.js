import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {
        let{item} = this.props
        return (
            <div>
                {item.title}
            </div>
        );
    }
}

export default CommentComponent;