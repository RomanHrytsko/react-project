import React, {Component} from 'react';

class PhotoComponent extends Component {
    render() {
        let{item, chosePhoto}= this.props
        return (
            <div>
                {`URL: ${item.url}`}
                <br/>
                {`Album id: ${item.id}`}
                <button onClick={()=> chosePhoto(item.id)}>Chose</button>
                <hr/>
            </div>
        );
    }
}

export default PhotoComponent;