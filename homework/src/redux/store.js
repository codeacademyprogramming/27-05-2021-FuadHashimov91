import {createStore,combineReducers} from 'redux';
import productReducer from './reducer';


const reducers = combineReducers({
    reducer:productReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

