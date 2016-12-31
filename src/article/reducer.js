import {
    LOAD_ARTICLES_SUCCESS,
    UPDATE_ARTICLE_LOCAL,
    UPDATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_SUCCESS,
    FILTER_ARTICLES
} from "./actionTypes";
import {List} from "immutable";
import createReducer from "redux-action-reducer";
import dateformat from "dateformat";

const articleQueryDef = {
    id: "equal",
    title: "like",
    content: "like",
    createDate: "equalDate",
    updateDate: "equalDate",
    hit: "none",
    author: "relation"
};

const filterByRule = (rules) => {
    return function (data, query) {
        const iterator = data.keys();

        var next = iterator.next();
        while (!next.done) {
            const key = next.value;
            const queryKeys = Object.keys(query);
            if (new Set(queryKeys).has(key)) {
                switch (rules[key]) {
                    case "equal":
                        if (data[key] === query[key])return true;
                        return false;
                    case "like":
                        if (data[key].indexOf(query[key]) >= 0)return true;
                        return false;
                    case "equalDate":
                        const formattedDate = (_date) => (dateformat(new Date(_date), "yyyy-mm-dd"));
                        if (formattedDate(query[key]) === formattedDate(data[key]))return true;
                        return false;
                    case "relation":
                    //TODO:
                    case "none":
                    default:
                        return false;
                }
            }
            next = iterator.next();
        }
    };
};

const filterByArticleRule = (data, query) => {
    return filterByRule(articleQueryDef)(data, query);
};

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
    }],
    [FILTER_ARTICLES, (state, payload) => {
        return state.filter((article) => filterByArticleRule(article, payload));
    }]
)(new List());