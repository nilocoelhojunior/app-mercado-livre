import React from 'react';
import { Route } from 'react-router-dom';

import { LayoutBase } from '../components';
import { Home, SearchResult } from '../pages';
import { HOME, SEARCH_RESULT, PRODUCT } from './constants';

const Routes = () => (
  <React.Fragment>
    <Route exact path={HOME} component={LayoutBase(SearchResult)} />
    <Route path={SEARCH_RESULT} component={LayoutBase(SearchResult)} />
    <Route path={PRODUCT} component={Home} />
  </React.Fragment>
);

export default Routes;
