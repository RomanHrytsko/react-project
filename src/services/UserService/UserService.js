export class UserService{
    url = 'https://jsonplaceholder.typicode.com/users'

    getAllUser(){
        return fetch(this.url).then(value => value.json())
    }
}