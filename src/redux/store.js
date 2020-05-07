import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducerItems from './reducers/reducerItems';
import thunk from "redux-thunk";

const reducer = combineReducers({
    reducerItems,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;