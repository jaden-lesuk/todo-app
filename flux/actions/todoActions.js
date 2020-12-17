import axios from 'axios';
import {GET_TODOS} from './types';


export const getTodos = () => dispatch => {
        return axios
        .get('http://www.mocky.io/v2/5dfb8eab2f000056c4ffa05c')
        .then(
            res => dispatch( {type: GET_TODOS, payload: res.data.tasks} )
        )
        .catch(
            err => { console.log(err) }
        )
}

