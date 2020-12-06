import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {
        let {item, choseComment}= this.props
        return (
            <div>

                {`User name: ${item.name}`}
                <br/>
                {`User email: ${item.email}`}
                <br/>
                {`User text: ${item.body}`}
                <br/>
                {`User id: ${item.id}`}
                <button onClick={()=> choseComment(item.id)}>CHOSE</button>
                <hr/>

            </div>
        );
    }
}

export default CommentComponent;