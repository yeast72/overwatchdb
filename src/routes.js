import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Menu from './Menu';
import Teams from './ui/Team';
import Maps from './ui/Map';
import Players from './ui/Player';
import Heros from './ui/Hero';
import Tournaments from './ui/containers/Tournaments';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Menu}>
        <Route path="tournaments" component={Tournaments} />
        <Route path="maps" component={Maps} />
        <Route path="players" component={Players} />
        <Route path="heros" component={Heros} />
        <Route path="teams" component={Teams} />
      </Route>
    </Router>
  )
}