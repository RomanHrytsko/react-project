export class PeopleService{
    url = 'https://swapi.dev/api/people/'

    async getAllPeople(){
        return await fetch(this.url).then(value => value.json())
    }
}