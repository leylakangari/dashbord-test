import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import Routes from './routes';
import './styles/globals.scss';
import createHistory from 'history/createBrowserHistory'
import Header from './components/header'
import Footer from './components/footer'


const logger = createLogger({
    collapsed: true,
    duration: true
});
const createStoreWithMiddleware = applyMiddleware(logger, promiseMiddleware)(createStore)

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    , document.getElementById('root'));
