import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class PostComponent extends Component {
    render() {
        let{item} = this.props
        let{match:{url}} = this.props
        return (
            <div>
                {item.title} - <Link to={url + '/' + item.id}>Post info</Link>
                <hr/>
            </div>
        );
    }
}

export default withRouter(PostComponent);