export class PhotosService{
    url = 'https://jsonplaceholder.typicode.com/photos'
    getAllPhotos(){
      return   fetch(this.url)
          .then(value => value.json())
          .then(photosFromApi => {return photosFromApi})
          }
    getPhotoById(id){
        return  fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }

}
