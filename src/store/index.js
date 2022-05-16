import { createStore, combineReducers} from 'redux';
import genres from '../reducers/genres';
import movies from '../reducers/movies';

const store = createStore(
        combineReducers({genres,movies})
        
        , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;