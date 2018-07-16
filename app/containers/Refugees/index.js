import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Header from './Header';
import Link from './Link';
import Background from './background';
import Tile from './Tile';
import LeftTile from './LeftTile';
import RightTile from './RightTile';
import TileRow from './TileRow';
import CircleProfile from './CircleProfile';

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
          <TileRow>
            <LeftTile>
              <CircleProfile src="../../images/man.jpg" />
              <FormattedMessage {...messages.header} />
            </LeftTile>
            <Tile>
              <FormattedMessage {...messages.header} />
            </Tile>
            <Tile>
              <FormattedMessage {...messages.header} />
            </Tile>
            <RightTile>
              <FormattedMessage {...messages.header} />
            </RightTile>
          </TileRow>
          <LeftTile>
            <FormattedMessage {...messages.header} />
          </LeftTile>
          <Tile>
            <FormattedMessage {...messages.header} />
          </Tile>
          <Tile>
            <FormattedMessage {...messages.header} />
          </Tile>
          <RightTile>
            <FormattedMessage {...messages.header} />
          </RightTile>
        </div>
      </div>
    );
  }
}
