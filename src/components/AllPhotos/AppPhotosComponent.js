import React, {Component} from 'react';
import PhotoComponent from "./PhotoComponent";

class AppPhotosComponent extends Component {
    state = {photos:[], selectedPhoto: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(value => value.json())
            .then(photosFromApi => {this.setState({photos:photosFromApi})
    })
}

    chosePhoto = (id) => {
        let chosen = this.state.photos.find(value => value.id === id)
        this.setState({selectedPhoto: chosen})
    }


    render() {
        let{photos, selectedPhoto} = this.state
        return (

            <div>
                <h1>All photos</h1>
                {
                    selectedPhoto && <PhotoComponent item={selectedPhoto}/>
                }
                {
                    photos.map(value=>(<PhotoComponent item={value} key={value.id} chosePhoto={this.chosePhoto}/>))
                }
            </div>
        );
    }
}

export default AppPhotosComponent;