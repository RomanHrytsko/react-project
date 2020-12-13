export class TodosService{
    url = 'https://jsonplaceholder.typicode.com/todos'
    async getAllTodos() {
        return await fetch(this.url).then(value => value.json())
    }
    async getTodoById(id){
        return await  fetch(this.url +'/' + id).then(value => value.json())
    }
}