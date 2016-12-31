import {
    LOAD_ARTICLES_SUCCESS,
    UPDATE_ARTICLE_LOCAL,
    UPDATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_SUCCESS
} from "./actionTypes";
import {List} from "immutable";
import createReducer from "redux-action-reducer";

export const articlesReducer = createReducer(
    [UPDATE_ARTICLE_LOCAL, (state, payload) => {
        const index = state.findIndex((item) => item.get("id") === payload.id);
        if (index >= 0) {
            return state.update(
                index, (item) => (payload));
        }
        return state.push(payload);
    }],
    [UPDATE_ARTICLE_SUCCESS, (state, payload) => {
        const index = state.findIndex((item) => item.get("id") === payload.id);
        if (index >= 0) {
            return state.update(
                index, (item) => (payload));
        }
        console.error('발생할 수 없는 상황!!!');
        return state;
    }],
    [LOAD_ARTICLES_SUCCESS, (state, payload) => (new List(payload))],
    [CREATE_ARTICLE_SUCCESS, (state, payload) => (state.push(payload))],
    [DELETE_ARTICLE_SUCCESS, (state, payload) => {
        const index = state.findIndex((item) => item.get("id") === payload.id);
        if (index >= 0) {
            return state.delete(index);
        }
        console.error('발생할 수 없는 상황!!!');
        return state;
    }]
)(new List());