/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Refugees from 'containers/Refugees/Loadable';
import Archives from 'containers/Archives/Loadable';
import AboutUs from 'containers/AboutUs/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/people" component={Refugees} />
        <Route exact path="/archives" component={Archives} />
        <Route exact path="/about" component={AboutUs} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
