import React from 'react';
import {render} from 'react-dom';
import App from "./components/app";
import './scss/index.scss';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);