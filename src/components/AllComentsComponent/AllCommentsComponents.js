import React, {Component} from 'react';
import CommentComponent from "./Comment/CommentComponent";

class AllCommentsComponents extends Component {



state = {comments: []}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromAPI =>{
                this.setState({comments: commentsFromAPI})
            })
    }

    render() {
    let {comments} = this.state
        return (
            <div>
                <h1>All comments</h1>
                {
                    comments.map(value => <CommentComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllCommentsComponents;