export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users'

    getAllUSers() {
        return fetch(this.url)
            .then(value => value.json())
            .then(usersFromAPI => {
                return usersFromAPI
            })
    }
    getUSerById(id){
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }

}

