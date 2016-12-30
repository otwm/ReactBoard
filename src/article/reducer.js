import {
    LOAD_ARTICLES_SUCCESS,
    UPDATE_ARTICLE
} from "./actionTypes";
import {List} from "immutable";

export const Articles = new List();

export function articlesReducer(state = Articles, {payload, type}) {
    switch (type) {
        case UPDATE_ARTICLE:
            return state.update(
                state.findIndex((item) => item.get("id") === payload.id)
                , (item) => (payload));
        case LOAD_ARTICLES_SUCCESS:
            return new List(payload);
        default:
            return state;
    }

}

