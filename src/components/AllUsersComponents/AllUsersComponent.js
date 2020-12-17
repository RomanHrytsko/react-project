import React, {Component} from 'react';
import {UsersService} from "../../Services/UsersService/UsersService";
import UserComponent from "./UserComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import './UsersStyles.css'
import InfoAboutUser from "./InfoAboutUser";
import {PostsService} from "../../Services/PostsService/PostsService";
import PostComponent from "../AllPostsComponents/PostComponent";

class AllUsersComponent extends Component {
    state = {users: [], posts: [], chosenPosts: []}
    usersService = new UsersService()
    postsService = new PostsService()

    async componentDidMount() {
        let users = await this.usersService.getAllUser()
        this.setState({users})

        let posts = await this.postsService.getAllPosts()
        this.setState({posts})

    }

    chosenPosts = (id) => {
        this.state.users.forEach(user => {
            let arr = []
            if (id === 1) {
                this.state.posts.forEach(posts => {
                    if (posts.id <= 10) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 2) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 10 && posts.id <= 20) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 3) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 20 && posts.id <= 30) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 4) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 30 && posts.id <= 40) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 5) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 40 && posts.id <= 50) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 6) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 50 && posts.id <= 60) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 7) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 60 && posts.id <= 70) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 8) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 70 && posts.id <= 80) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 9) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 80 && posts.id <= 90) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            } else if (id === 10) {
                this.state.posts.forEach(posts => {
                    if (posts.id > 90 && posts.id <= 100) {
                        arr.push(posts)
                        this.setState({chosenPosts: arr})

                    }
                })
            }

        })
    }


    render() {
        let {users, posts, chosenPosts} = this.state
        console.log(chosenPosts)
        let {match: {url}} = this.props
        return (
            <div>
                <h2 className={'usersArticle'}>Users</h2>
                <div className={'mainBlock'}>
                    <div className={'usersBlock'}>
                        {
                            users.map(value => <UserComponent item={value} key={value.id}
                                                              chosenPosts={this.chosenPosts}/>)

                        }
                    </div>
                    {/*<div className={'InfoAboutUser'}>*/}
                    <Switch>
                        <Route path={url + '/:id'} render={(props) => {
                            let {match: {params: {id}}} = props
                            return <InfoAboutUser {...props} key={id}/>
                        }}/>
                    </Switch>
                    {/*</div>*/}
                </div>
                <div className={'mainPostBlock'}>
                    <div className={'postsBlock'}>
                        {chosenPosts.map(value => <PostComponent item={value} key={value.id}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsersComponent);