import React, {Component} from 'react';
import PostComponent from "./PostComponent";
import {postsSerice} from "../../services/postsService/postsService";

class AllPosts extends Component {
    state = {posts: [], selectedPost: null}
postsService = new postsSerice()

    componentDidMount() {
        this.postsService.getAllPosts().then(value => this.setState({posts:value}))
    }


    // chosePost = (id) => {
    //     let chosen = this.state.posts.find(value => value.id === id)
    //     this.setState({selectedPost: chosen})
    // }
    chosePost = (id)=>{
        this.postsService.getPostById(id).then(value => this.setState({selectedPost:value}))
    }


    render() {
        let {posts, selectedPost} = this.state
        return (

            <div>
                <h1>All posts</h1>
                {
                    selectedPost && <PostComponent item={selectedPost} isShowButton={false}/>
                }
                <hr/>
                {
                    posts.map(value => (
                        <PostComponent item={value} key={value.id} chosePost={this.chosePost} isShowButton={true}/>))
                }


            </div>
        );
    }
}

export default AllPosts;