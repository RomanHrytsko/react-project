import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class CommentComponent extends Component {
    render() {
        let{item} = this.props
        let{match:{url}} =this.props
        return (
            <div>
                {item.body} - <Link to={url+ '/' + item.id}>Comment Info</Link>
                <hr/>
            </div>
        );
    }
}

export default withRouter(CommentComponent);