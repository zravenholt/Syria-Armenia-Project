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
import Involved from 'containers/Involved/Loadable';
import Creators from 'containers/AboutUs/Creators/Loadable';
import Project from 'containers/AboutUs/Project/Loadable';
import History from 'containers/AboutUs/History/Loadable';
import Organizations from 'containers/Partners/Organizations/Loadable';
import Contributors from 'containers/Partners/Contributors/Loadable';
import Media from 'containers/Partners/Media/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const Style = {
  backgroundColor: 'white',
};

function detectmob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }
  return false;
}

export default function App() {
  if (detectmob()) {
    return (
      <div>
        This site is not set up for mobile use, please visit us on your computer
        browser!
      </div>
    );
  }
  return (
    <div style={Style}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/people" component={Refugees} />
        <Route exact path="/archives" component={Archives} />
        <Route exact path="/volunteer" component={Involved} />
        <Route exact path="/partners/organizations" component={Organizations} />
        <Route exact path="/partners/contributors" component={Contributors} />
        <Route exact path="/partners/media" component={Media} />
        <Route exact path="/about/creators" component={Creators} />
        <Route exact path="/about/project" component={Project} />
        <Route exact path="/about/history" component={History} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
