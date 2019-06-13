import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
    mainReducer:reducer
})

export default rootReducer;