export class PlanetsService{
    url = 'https://swapi.dev/api/planets/'

    async getAllPlanets(){
          return fetch( this.url).then(value => value.json())
    }
}