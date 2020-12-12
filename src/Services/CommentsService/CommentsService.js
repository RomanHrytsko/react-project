export class CommentsService{
    url = 'https://jsonplaceholder.typicode.com/comments'
    async getAllComments(){
        return await fetch(this.url).then(value => value.json())
    }
    async getCommentById(id){
        return await  fetch(`${this.url}/${id}`).then(value => value.json())
    }
}