import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class TodoComponent extends Component {
    render() {
        let {item} = this.props
        let{match: {url}} = this.props

        return (
            <div>
                {item.id} - {item.title} - <Link to={url + '/' + item.id}>Info about todo</Link>
            </div>
        );
    }
}

export default withRouter(TodoComponent);