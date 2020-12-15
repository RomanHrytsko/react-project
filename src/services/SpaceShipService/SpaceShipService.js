export class SpaceShipService {
    url = 'https://swapi.dev/api/starships'

    async getAllSpaceShips() {
        return await fetch(this.url).then(value => value.json())
    }

    async getSpaceShipsById(id) {
        return await fetch(this.url + '/' + id).then(value => value.json())
    }
}