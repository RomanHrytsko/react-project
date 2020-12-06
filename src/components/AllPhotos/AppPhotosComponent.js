import React, {Component} from 'react';
import PhotoComponent from "./PhotoComponent";
import {PhotosService} from "../../services/PhotosService/PhotosService";

class AppPhotosComponent extends Component {
    state = {photos:[], selectedPhoto: null}
photoService = new PhotosService()
    componentDidMount() {
      this.photoService.getAllPhotos().then(value => this.setState({photos: value}))
}

    // chosePhoto = (id) => {
    //     let chosen = this.state.photos.find(value => value.id === id)
    //     this.setState({selectedPhoto: chosen})
    // }
    chosePhoto = (id) =>{
        this.photoService.getPhotoById(id).then(value => this.setState({selectedPhoto: value}))
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