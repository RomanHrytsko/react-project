import React, {Component} from 'react';

class PhotoComponent extends Component {
    render() {
        let{item}= this.props
        return (
            <div>
                {`URL: ${item.url}`}
                <br/>
                {`Album id: ${item.id}`}
                <hr/>
            </div>
        );
    }
}

export default PhotoComponent;