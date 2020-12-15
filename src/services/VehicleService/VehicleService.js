export class VehicleService{
    url = 'https://swapi.dev/api/vehicles'

    async getAllVehicles(){
        return await fetch(this.url).then(value => value.json())
    }
    async getVehicleById(id){
        return await fetch(this.url + '/' + id + '/').then(value => value.json())
    }
}