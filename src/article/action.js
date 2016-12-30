import {articleList} from './articleList';
import {articleRecord} from './articleRecord';
import {
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_ERROR,
    UPDATE_ARTICLE,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLE_SUCCESS,
    UNLOAD_ARTICLES_SUCCESS
} from './actionTypes';

export function createArticle(title, content) {
    return dispatch => {
        articleList.push({title, content})
            .catch(error => dispatch(createArticleError(error)));
    };
}

export function createArticleSuccess(article) {
    console.log({
        type: CREATE_ARTICLE_SUCCESS,
        payload: article
    });
    return {
        type: CREATE_ARTICLE_SUCCESS,
        payload: article
    };
}

export function createArticleError(error) {
    return {
        type: CREATE_ARTICLE_ERROR,
        payload: error
    };
}
export function updateArticle(article) {
    return {
        type: UPDATE_ARTICLE,
        payload: article
    }
}

export function updateArticleSuccess() {
}

export function loadArticlesSuccess(articles) {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        payload: articles
    }
}

export function loadArticleSuccess(article) {
    return {
        type: LOAD_ARTICLE_SUCCESS,
        payload: article
    }
}

export function deleteArticleSuccess() {
}

export function loadArticles() {
    return (dispatch) => {
        articleList.subscribe(dispatch)
    };
}

export function unloadArticles() {
    articleList.unsubscibe();
    return {
        type: UNLOAD_ARTICLES_SUCCESS
    };
}

export function loadArticle() {
    return (dispatch) => {
        articleRecord.subscribe(dispatch)
    };
}