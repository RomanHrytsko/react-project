export class VehicleService{
    url = 'https://swapi.dev/api/vehicles/'

    getAllVehicles(){
        return fetch(this.url).then(value => value.json())
    }
}