import {SAVE, INSERT, UPDATE, DELETE} from "./actionTypes";
import {Set} from "immutable";

export const Articles = new Set();

export function articlesReducer(state = Articles, {payload, type}) {
    switch (type) {
        case INSERT:
            return state.add(payload);
        case UPDATE:
            return state.merge(payload);
        case DELETE:
            return state.update(payload);
        case SAVE:
            return state.add(payload);
        default:
            return state;
    }

}

