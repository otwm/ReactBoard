import React from "react";
import {Route, IndexRoute} from "react-router";
import ArticleList from "./article/component/ArticleList";
import ArticleForm from "./article/component/ArticleForm";
import App from "./App";

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={ArticleList}/>
        <Route path="articles" components={ArticleList}/>
        <Route path="articles/form" components={ArticleForm}/>
        <Route path="articles/:id" components={ArticleForm}/>
    </Route>
);

export default routes;