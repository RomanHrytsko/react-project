import React, {Component} from 'react';
import CommentComponent from "./Comment/CommentComponent";

class AllCommentsComponents extends Component {


    state = {comments: [], selectedComment: null}


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromAPI => {
                this.setState({comments: commentsFromAPI})
            })
    }

    choseComment = (id) => {
        let chosen = this.state.comments.find(value => value.id === id)
        this.setState({selectedComment: chosen})
    }

    render() {
        let {comments, selectedComment} = this.state
        return (
            <div>
                <h1>All comments</h1>

                {
                    comments.map(value => <CommentComponent item={value} key={value.id} choseComment={this.choseComment}/>)
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