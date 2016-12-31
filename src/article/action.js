import {articleList} from './articleList';
import {articleRecord} from './articleRecord';
import {
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_ERROR,
    UPDATE_ARTICLE_LOCAL,
    UPDATE_ARTICLE_ERROR,
    UPDATE_ARTICLE_SUCCESS,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLE_SUCCESS,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_ERROR,
    UNLOAD_ARTICLES_SUCCESS,
    FILTER_ARTICLES
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

export function updateArticleByLocal(article) {
    return {
        type: UPDATE_ARTICLE_LOCAL,
        payload: article
    }
}

export function updateArticle(article) {
    return dispatch => {
        articleList.update(article.id, article)
            .catch(error => dispatch(updateArticleError(error)));
    };
}

export function updateArticleSuccess(article) {
    return {
        type: UPDATE_ARTICLE_SUCCESS,
        payload: article
    }
}

export function updateArticleError(error) {
    return {
        type: UPDATE_ARTICLE_ERROR,
        payload: error
    }
}

export function loadArticlesSuccess(articles) {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        payload: articles
    }
}

export function deleteArticle(article) {
    return dispatch => {
        articleList.remove(article.id)
            .catch(error => dispatch(deleteArticleError(error)));
    };
}

export function deleteArticleError(error) {
    return {
        type: DELETE_ARTICLE_ERROR,
        payload: error
    };
}

export function loadArticleSuccess(article) {
    return {
        type: LOAD_ARTICLE_SUCCESS,
        payload: article
    }
}

export function deleteArticleSuccess(article) {
    return {
        type: DELETE_ARTICLE_SUCCESS,
        payload: article
    };
}

export function loadArticles(onLoadStart, onLoadEnd) {
    return (dispatch) => {
        articleList.subscribe(dispatch, onLoadStart, onLoadEnd)
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

export function filterArticles(query) {
    return {
        type: FILTER_ARTICLES,
        payload: query
    }
}