import {Article} from './article';
import {FirebaseList} from '@/firebase/FirebaseList';
import * as articleActions from './action';

export const articleList = new FirebaseList({
    onAdd: articleActions.createArticleSuccess,
    onChange: articleActions.updateArticleSuccess,
    onLoad: articleActions.loadArticlesSuccess,
    onRemove: articleActions.deleteArticleSuccess
}, Article,'article');
