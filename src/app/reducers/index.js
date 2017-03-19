import {combineReducers } from 'redux'
import calendar from './calendar.reducer'
import {routerReducer } from 'react-router-redux'



const reducers = combineReducers({
    calendar,
    routing: routerReducer
});

export default reducers;