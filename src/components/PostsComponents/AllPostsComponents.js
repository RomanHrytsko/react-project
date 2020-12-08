import React, {Component} from 'react';
import {PostsService} from "../../services/PostsServices/PostsService";
import PostsComponent from "./PostsComponent";

class AllPostsComponents extends Component {
    postsService = new PostsService()
    state = {posts: []}

    async componentDidMount() {
        let posts = await this.postsService.getAllPosts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state
        return (
            <div>
                {
                    posts.map(value => <PostsComponent item={value} key={value.id}/>)
                }
                all posts
            </div>
        );
    }
}

export default AllPostsComponents;