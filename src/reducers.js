import {combineReducers} from "redux";
import {articlesReducer} from "./article";

export default combineReducers({
    articles: articlesReducer
});