import {compose, applyMiddleware, createStore} from "redux";
import { persistState } from 'redux-devtools';
import thunk from "redux-thunk";
import reducers from "./reducers";
import Devtools from './Devtools';

const enhancer = compose(
    applyMiddleware(thunk),
    Devtools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    const store = createStore(reducers, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('./reducers', () =>
            store.replaceReducer(require('./reducers').default)
        );
    }

    return store;
}
