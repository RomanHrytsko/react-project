import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item, chosePost, isShowButton} = this.props
        return (
            <div>
                {/*{`Post body: ${item.body}`}*/}

                {`Post title: ${item.title}`}{
                isShowButton && <button onClick={() => chosePost(item.id)}>CHOSE</button>
            }

                <hr/>
            </div>
        );
    }
}

export default PostComponent;