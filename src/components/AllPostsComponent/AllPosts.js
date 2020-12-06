import React, {Component} from 'react';
import PostComponent from "./PostComponent";

class AllPosts extends Component {
    state = {posts:[], selectedPost:null}




    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
            this.setState( {posts: postsFromAPI})
    })
}
    chosePost = (id) => {
        let chosen = this.state.posts.find(value => value.id === id)
        this.setState({selectedPost: chosen})
    }

    render() {
        let {posts, selectedPost} = this.state
        return (

            <div>
                <h1>All posts</h1>
                {
                    selectedPost && <PostComponent item={selectedPost}/>
                }
                <hr/>
                {
                    posts.map(value =>(<PostComponent item={value} key={value.id} chosePost={this.chosePost}/>))
                }



            </div>
        );
    }
}

export default AllPosts;