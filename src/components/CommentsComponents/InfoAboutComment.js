import React, {Component} from 'react';
import {CommentsService} from "../../Services/CommentsService/CommentsService";

class InfoAboutComment extends Component {
    state = {comment: null}
    comentService = new CommentsService()
   async componentDidMount() {
        let{match:{params:{id}}} = this.props
        let comment = await this.comentService.getCommentById(id)
       this.setState({comment})
    }

    render() {
        let {comment} = this.state
        return (
            <div>
                {comment && <div>{comment.id} - {comment.body}- {comment.email} </div>}
            </div>
        );
    }
}

export default InfoAboutComment;