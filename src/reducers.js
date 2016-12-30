import {combineReducers} from "redux";
import {articlesReducer} from "./article";
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    articles: articlesReducer,
    routing: routerReducer
});