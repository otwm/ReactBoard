import {
    LOAD_ARTICLES_SUCCESS,
    UPDATE_ARTICLE_LOCAL
} from "./actionTypes";
import {List} from "immutable";

export const Articles = new List();

export function articlesReducer(state = Articles, {payload, type}) {
    switch (type) {
        case UPDATE_ARTICLE_LOCAL:
            const index = state.findIndex((item) => item.get("id") === payload.id);
            if (index >= 0) {
                return state.update(
                    index, (item) => (payload));
            }
            return state.push(payload);
        case LOAD_ARTICLES_SUCCESS:
            return new List(payload);
        default:
            return state;
    }

}

