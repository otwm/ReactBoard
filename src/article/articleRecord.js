import {Article} from './article';
import {FirebaseRecord} from '@/firebase/FirebaseRecord';
import * as articleActions from './action';

export const articleRecord = new FirebaseRecord({
    onAdd: articleActions.createArticleSuccess,
    onChange: articleActions.updateArticleSuccess,
    onLoad: articleActions.loadArticleSuccess,
    onRemove: articleActions.deleteArticleSuccess
}, Article,'article');
