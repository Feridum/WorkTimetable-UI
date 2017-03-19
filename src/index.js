import ReactDOM from 'react-dom';
import React from 'react'
import routes from './app/app.routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './app/reducers/index'
import { Router, browserHistory } from 'react-router'

import {syncHistoryWithStore } from 'react-router-redux'

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
   <Router history={history} routes={routes}></Router>
  </Provider>,
  document.getElementById('root')
);