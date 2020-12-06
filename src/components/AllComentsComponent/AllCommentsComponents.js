import React, {Component} from 'react';
import CommentComponent from "./Comment/CommentComponent";
import {commentsService} from "../../services/commentsService/commentsService";

class AllCommentsComponents extends Component {
    commentsService = new commentsService()

    state = {comments: [], selectedComment: null}


    componentDidMount() {
        this.commentsService.getAllComments().then(value => this.setState({comments: value}))
    }

    // choseComment = (id) => {
    //     let chosen = this.state.comments.find(value => value.id === id)
    //     this.setState({selectedComment: chosen})
    // }
    choseComment = (id) =>{
        this.commentsService.getCommentById(id).then(value => this.setState({selectedComment: value}))
    }

    render() {
        let {comments, selectedComment} = this.state
        return (
            <div>
                <h1>All comments</h1>

                {
                    comments.map(value => <CommentComponent item={value} key={value.id}
                                                            choseComment={this.choseComment}/>)
                }
                {
                    selectedComment && <CommentComponent item={selectedComment}/>

                }
                <hr/>
            </div>
        );
    }

}

export default AllCommentsComponents;