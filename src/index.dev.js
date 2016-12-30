import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import "./index.css";
import configureStore from "./store";
import {syncHistoryWithStore} from "react-router-redux";
import DevTools from "./Devtools";
import routes from "./route";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history} routes={routes}/>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

