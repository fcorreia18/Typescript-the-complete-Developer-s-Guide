import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk';

//my imports
import { App } from "./components/App";
import { reducers } from "./reducers";
export const store: Store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

