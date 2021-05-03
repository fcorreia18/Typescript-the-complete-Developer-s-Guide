import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'
export interface AppProps {
    todos: Todo[],
    fetchTodos(): Function,
    deleteTodo(): typeof deleteTodo
}
class _App extends Component<AppProps> {
    onButtonClick = (): void => {
        this.props.fetchTodos();
    }
    renderList(): JSX.Element[] {
        return this.props.todos.map((todos: Todo): JSX.Element => <div key={todos.id}>{todos.title}</div>
        )
    }


    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>FETCH</button>
                <span>{this.renderList()}</span>
            </div>
        )
    }
}
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
}


export const App = connect(mapStateToProps, { fetchTodos })(_App)