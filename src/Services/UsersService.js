export class UsersService {
    url = 'https://jsonplaceholder.typicode.com/users'

    async getAllUser() {
        return await fetch(this.url).then(value => value.json())
    }


}