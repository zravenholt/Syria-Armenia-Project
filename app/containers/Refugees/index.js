import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Header from './Header';
import Link from './Link';
import Background from './background';

/* eslint-disable react/prefer-stateless-function */
export default class Refugees extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <Background />
        </div>
        <div>
          <Link href="/archives" to="/archives">
            Video Archives
          </Link>
          <Link href="/" to="/">
            Home
          </Link>
          <Link href="/about" to="/about">
            About Us
          </Link>
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
        </div>
      </div>
    );
  }
}
