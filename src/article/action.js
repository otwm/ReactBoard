import articleList from './articleList';
import {
    SAVE,
    INSERT,
    INSERT_SUCCESS,
    INSERT_ERROR,
    UPDATE,
    DELETE
} from './actionTypes';

export function createArticle(title, content) {
    return dispatch => {
        articleList.push({title, content})
            .catch(error=>dispatch(createArticleError(error)));
    };
}

export function createArticleSuccess(article) {
    return {
        type: INSERT_SUCCESS,
        payload: article
    };
}

export function createArticleError(error) {
    return {
        type: INSERT_ERROR,
        payload: error
    };
}

export function updateArticleSuccess() {
}

export function loadArticlesSuccess() {
}

export function deleteArticleSuccess() {
}

export function loadArticle() {
    return (dispatch) => {
        articleList.subscribe(dispatch)
    };
}