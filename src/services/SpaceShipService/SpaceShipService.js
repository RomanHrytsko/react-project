export class SpaceShipService{
    url = 'https://swapi.dev/api/starships/'

    async getAllSpaceShips(){
       return await fetch(this.url).then(value => value.json())
    }
}