export class PostsService{
    url = 'https://jsonplaceholder.typicode.com/posts'
   async getAllPosts() {
        return fetch(this.url).then(value => value.json())
    }
    async getPostById(id) {
        return fetch(this.url + '/' + id).then(value => value.json())
    }
}