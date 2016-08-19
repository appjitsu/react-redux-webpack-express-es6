import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router';
import promise from 'redux-promise';
import logger from 'redux-logger';

// import createSocketIoMiddleware from 'redux-socket.io';
// import io from 'socket.io-client';
// let socket = io('http://localhost:3002');
// let socketIoMiddleware = createSocketIoMiddleware(socket, "");

import reducers from './reducers';
import routes from './routes';
const initialState = require('./data/initial-state');
const store = createStore(reducers, initialState);
store.subscribe(()=>{
  console.log('new client state', store.getState());
});

let storeWithMiddleware = applyMiddleware(logger)(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.app'));
