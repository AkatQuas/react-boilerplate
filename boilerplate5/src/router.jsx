import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SmallCounter from './components/small-counter';
import Setting from './components/setting';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={SmallCounter} />
      <Route path="/setting" component={Setting} />
    </Switch>
  )
}
