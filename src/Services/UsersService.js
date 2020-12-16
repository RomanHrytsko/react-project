export class UsersService{
url = 'https://jsonplaceholder.typicode.com/users'
    async getAllUser(){
    return await fetch(this.url).then(value => value.json())
    }
    async getUserById(id){
    return await  fetch(this.url + '/' + id).then(value => value.json())
    }
}