import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typecode/todos';
export const fetchTodos = (dispatch: Dispatch) => {
    return async () => {
        const response = await axios.get(url);

        dispatch({
            type: 'FETCH_TODOS',
            payload: response.data
        })
    }
}
