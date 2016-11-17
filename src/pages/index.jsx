import 'vaco-components-library/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, hashHistory } from 'react-router';

import '../styles/mdl/material-design-lite-grid.scss';

import {
  App//,
//  Root,
//  Home,
//  About,
//  Team,
} from '../containers';
import createStore from '../redux/create';

const history = hashHistory;

//const routes = (
//  <Route path="/" component={App}>
//    <IndexRoute component={Home} />
//    <Route path="/about" component={About} />
//    <Route path="/team" component={Team} />
//  </Route>
//);

//const store = createStore(history);
// const history = syncHistoryWithStore(hashHistory, store);


//ReactDOM.render(
//  <Root
//    history={history}
//    routes={routes}
//    store={store}
//  />,
//  document.getElementById('root')
//);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
