import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import ArticleList from './article/component/ArticleList';
import ArticleForm from './article/component/ArticleForm';
import App from "./App";
import "./index.css";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ArticleList}/>
                <Route path="articles" components={ArticleList}/>
                <Route path="articles/form" components={ArticleForm}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

