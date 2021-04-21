import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string
}

interface AppState {
    counter: number
}
class App extends React.Component<AppProps, AppState> {
    // state: { counter: number } = { counter: 0 }
    constructor(props: AppProps) {
        super(props);

        this.state = { counter: 0 };
    }
    public onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 });
    }
    public onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 });
    }
    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                <div>{this.state.counter}</div>
            </div>

        )
    }
}

ReactDOM.render(<App color="red" />, document.getElementById('root'))