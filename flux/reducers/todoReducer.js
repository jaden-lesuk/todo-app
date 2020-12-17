import {GET_TODOS} from '../actions/types';

const INITIAL_STATE = {
    todos: []
}

export default function( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
            };

        default:
            return state;
    }
}

