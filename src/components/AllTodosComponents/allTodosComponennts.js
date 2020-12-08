import React, {Component} from 'react';
import {TodosService} from "../../services/TodosComponents/TodosService";
import TodoComponent from "./todoComponent";

class AllTodosComponennts extends Component {
    state = {todos:[]}
    todosServise = new TodosService()

    async componentDidMount() {
        let todos = await this.todosServise.getAllTodos()
        this.setState({todos})

    }


    render() {
        let{todos}= this.state
        return (
            <div>
                {
                    todos.map(value => <TodoComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllTodosComponennts;