export class PeopleService {
    url = 'https://swapi.dev/api/people/'

    async getAllPeople() {
        return await fetch(this.url).then(value => value.json())
    }

    async getPeopleByName(name) {
        return await fetch(this.url + name).then(value => value.json())
    }

}