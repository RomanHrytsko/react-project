import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {PostsService} from "../../Services/PostsService/PostsService";

class PostInfo extends Component {
    state = {post: null}
    postsService = new PostsService()

    async componentDidMount() {
        let {match: {params: {id}}} = this.props

        let post = await this.postsService.getPostById(id)
        this.setState({post})
    }

    render() {
        let {post} = this.state
        return (
            <div>
                {post && <div><h2>{post.id}-{post.title}-{post.body}</h2></div>}
            </div>
        );
    }

}

export default withRouter(PostInfo);