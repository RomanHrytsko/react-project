import React, {Component} from 'react';
import {TodosService} from "../../Services/TodosService/TodosService";

class InfoAboutTodo extends Component {
    state = {todo: null}
    todosService = new TodosService()

    async componentDidMount() {

        let{match:{params:{id}}}= this.props
        let todo = await this.todosService.getTodoById(id)
        this.setState({todo})

    }

    render() {
        let{todo} = this.state
        console.log(todo)
        return (
            <div>
                {todo && <div>{todo.id} - {todo.title}-{todo.completed.toString()}</div>}
            </div>
        );
    }
}

export default InfoAboutTodo;