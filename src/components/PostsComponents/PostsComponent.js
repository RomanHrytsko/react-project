import React, {Component} from 'react';

class PostsComponent extends Component {
    render() {
        let{item} = this.props
        return (
            <div>
                {item.id}-{item.title}
            </div>
        );
    }
}

export default PostsComponent;