import ReactDOM from 'react-dom';
import React from 'react'
import routes from './app/app.routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './app/reducers/index'
import { Router, hashHistory } from 'react-router'

import {syncHistoryWithStore } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './app/app.sagas'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  reducers,
  {},
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

sagaMiddleware.run(rootSaga)

const history = syncHistoryWithStore(hashHistory, store)
ReactDOM.render(
  <Provider store={store}>
   <Router history={history} routes={routes}></Router>
  </Provider>,
  document.getElementById('root')
);