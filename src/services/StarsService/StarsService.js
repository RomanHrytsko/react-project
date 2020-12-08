export class StarsService {
    url = 'https://swapi.dev/api/people/'
    async getAllStars(){
        return await fetch(this.url).then(value => value.json())
    }
    async getStarById(id){
        return await fetch(`${this.url}/${id}`)

    }
}