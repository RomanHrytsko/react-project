import React, {Component} from 'react';
import {PostsService} from "../../Services/PostsService/PostsService";
import PostComponent from "./PostComponent";
import {Route, Switch, withRouter} from "react-router-dom";
import PostInfo from "./PostInfo";

class AllPostsComponent extends Component {
    state = {posts: []}
    postsService = new PostsService()

    async componentDidMount() {
        let posts = await this.postsService.getAllPosts()
        this.setState({posts})

    }

    render() {
        let {posts} = this.state
        let{match:{url}} = this.props
        return (
            <div>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        let {match:{params:{id}}} = props
                        return<PostInfo {...props} key={id}/>
                    }}/>

                </Switch>

                {
                    posts.map(value => <PostComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default withRouter(AllPostsComponent);