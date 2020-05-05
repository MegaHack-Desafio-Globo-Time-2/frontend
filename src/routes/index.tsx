import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Preferences from '../pages/Preferences';
import ContentDetail from '../pages/ContentDetail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/content/:id" component={ContentDetail} />
    <Route path="/preferences" component={Preferences} />
  </Switch>
);

export default Routes;
