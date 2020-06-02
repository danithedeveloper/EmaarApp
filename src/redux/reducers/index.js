import {combineReducers} from 'redux';
import {ListReducer} from './ListReducer';

const allReducers = combineReducers({
    listScreen: ListReducer,
});

const rootReducer = (state, action) => {
    return allReducers(state, action);
};

export default rootReducer;
