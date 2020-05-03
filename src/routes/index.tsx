import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ContentDetail from '../pages/ContentDetail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/contents/:id" component={ContentDetail} />
  </Switch>
);


export default Routes;
