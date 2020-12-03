import React, {Component} from 'react';
import PhotoComponent from "./PhotoComponent";

class AppPhotosComponent extends Component {
    state = {photos:[]}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(value => value.json())
            .then(photosFromApi => {this.setState({photos:photosFromApi})
    })
}



    render() {
        let{photos} = this.state
        return (

            <div>
                <h1>All photos</h1>
                {
                    photos.map(value=>(<PhotoComponent item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default AppPhotosComponent;