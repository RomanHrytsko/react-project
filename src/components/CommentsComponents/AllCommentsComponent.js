import React, {Component} from 'react';
import {CommentsService} from "../../Services/CommentsService/CommentsService";
import CommentComponent from "./CommentComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import InfoAboutComment from "./InfoAboutComment";

class AllCommentsComponent extends Component {
    state = {comments: []}

    commentsService = new CommentsService()

    async componentDidMount() {
        let comments = await this.commentsService.getAllComments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state
        let {match: {url}} = this.props
        return (

            <div>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let{match:{params:{id}}} = props
                        return <h2><InfoAboutComment {...props} key={id}/></h2>
                    }}/>


                </Switch>
                {
                    comments.map(value => <CommentComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default withRouter(AllCommentsComponent);