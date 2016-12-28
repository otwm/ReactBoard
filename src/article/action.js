import {articleList} from './articleList';
import {
    SAVE,
    INSERT,
    INSERT_SUCCESS,
    INSERT_ERROR,
    UPDATE,
    DELETE,
    LOAD_ARTICLES_SUCCESS
} from './actionTypes';

export function createArticle(title, content) {
    return dispatch => {
        articleList.push({title, content})
            .catch(error => dispatch(createArticleError(error)));
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

export function loadArticlesSuccess(articles) {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        payload: articles
    }
}

export function deleteArticleSuccess() {
}

export function loadArticle() {
    return (dispatch) => {
        articleList.subscribe(dispatch)
    };
}