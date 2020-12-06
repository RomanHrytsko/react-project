import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item, chosePost} = this.props
        return (
            <div>
                {/*{`Post body: ${item.body}`}*/}

                {`Post title: ${item.title}`}
                <button onClick={()=> chosePost(item.id)}>CHOSE</button>
                <hr/>
            </div>
        );
    }
}

export default PostComponent;