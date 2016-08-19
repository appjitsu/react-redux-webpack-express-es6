import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import FourOhFour from './components/FourOhFour';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer} />
    <Route path="404" component={FourOhFour} />
    <Redirect from="*" to="404" />
  </Route>
);
