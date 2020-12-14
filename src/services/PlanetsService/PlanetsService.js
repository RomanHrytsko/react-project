export class PlanetsService{
    url = 'https://swapi.dev/api/planets'

    async getAllPlanets(){
          return fetch( this.url).then(value => value.json())
    }
    async getPlanetById(id){
        return await fetch(this.url + '/' + id).then(value => value.json())
    }
}