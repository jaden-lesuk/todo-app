import { createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'

import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers(
    {todo: todoReducer}
)


const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;