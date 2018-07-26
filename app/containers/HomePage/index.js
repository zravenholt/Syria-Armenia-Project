/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Background from './background';
import Title from './Title';
import Blurb from './Blurb';
import FeaturedVideo from './FeaturedVideo';
import Separator from './separator';
import Link from './Link';
import LinkContainer from './LinkContainer';
import VideoPanel from './VideoPanel';
// import Rerooted from './Rerooted';
// import img from '../../images/clearRerooted.png';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <Background />
        </div>
        <div>
          <LinkContainer>
            <Link href="/archives" to="/archives">
              Archives
            </Link>
            <Link href="/people" to="/people">
              Profiles
            </Link>
            <Link href="/about" to="/about">
              About Us
            </Link>
          </LinkContainer>
          <Title>
            <FormattedMessage {...messages.header} />
          </Title>
          {/* <Rerooted src={img} /> */}
          <Blurb>
            <FormattedMessage {...messages.blurb} />
          </Blurb>
          <Separator />
          <FeaturedVideo>
            <FormattedMessage {...messages.video} />
            <VideoPanel
              src="https://www.youtube.com/embed/Z2xUDCkf78M"
              allowFullScreen="true"
            />
          </FeaturedVideo>
        </div>
      </div>
    );
  }
}
