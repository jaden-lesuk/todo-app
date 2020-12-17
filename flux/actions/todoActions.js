import axios from 'axios';
import {GET_TODOS} from './types';


export const getTodos = () => dispatch => {
        axios
        .get('http://www.mocky.io/v2/5dfb8eab2f000056c4ffa05c')
        .then(
            res => {
                console.log(JSON.stringify(res.data.tasks));
                dispatch( {type: GET_TODOS, payload: JSON.stringify(res.data.tasks)} )}
        )
        .catch(
            err => { console.log(err) }
        )
}

