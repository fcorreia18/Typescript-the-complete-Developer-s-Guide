import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'
export interface AppProps {
    todos: Todo[],
    fetchTodos: Function,
    deleteTodo: typeof deleteTodo
}

export interface AppState {
    fetching: boolean
}
class _App extends Component<AppProps, AppState> {

    // state = {fetching: false} shorter way
    constructor(props: AppProps) {
        super(props);
        this.state = { fetching: false }

    }


    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true })
    }
    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false })
        }
    }
    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    }
    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo): JSX.Element => <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>{todo.title}</div>
        )
    }


    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>FETCH</button>
                {this.state.fetching ? 'LOADING' : null}

                {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
}


export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
