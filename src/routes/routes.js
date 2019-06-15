import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from '../pages';

export const HOME = '/';
export const SEARCH = '/items';
export const PRODUCT = '/items/:id';

const Routes = () => (
  <React.Fragment>
    <Route exact path={HOME} component={Home} />
    <Route path={SEARCH} component={Home} />
    <Route path={PRODUCT} component={Home} />
  </React.Fragment>
);

export default Routes;
