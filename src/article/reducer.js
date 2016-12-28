import {
    LOAD_ARTICLES_SUCCESS
} from "./actionTypes";
import {Set} from "immutable";

export const Articles = new Set();

export function articlesReducer(state = Articles, {payload, type}) {
    switch (type) {
        case LOAD_ARTICLES_SUCCESS:
            return new Set(payload);
        default:
            return state;
    }

}

