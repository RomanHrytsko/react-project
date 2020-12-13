import React, {Component} from 'react';
import {TodosService} from "../../Services/TodosService/TodosService";
import TodoComponent from "./TodoComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import InfoAboutTodo from "./InfoAboutTodo";

class AllTodosComponent extends Component {
    state = {todos:[]}
    todosService= new TodosService()

    async componentDidMount() {
        let todos = await this.todosService.getAllTodos()
        this.setState({todos})

    }

    render() {
        let{todos}= this.state
        let{match:{url}}= this.props
        return (
            <div>
                <Switch>
                    <Route path={url +'/:id'} render={(props)=>{
                        let{match:{params:{id}}} = props
                        return <InfoAboutTodo {...props} key={id}/>
                    }}/>
                </Switch>
                <hr/>
                {
                    todos.map(value => <TodoComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default withRouter(AllTodosComponent);