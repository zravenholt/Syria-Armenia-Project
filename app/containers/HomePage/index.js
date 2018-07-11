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
import VideoPanel from './VideoPanel';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
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
          <Link href="/people" to="/people">
            Refugees
          </Link>
          <Link href="/about" to="/about">
            About Us
          </Link>
          <Title>
            <FormattedMessage {...messages.header} />
          </Title>
          <Blurb>
            <FormattedMessage {...messages.blurb} />
          </Blurb>
          <Separator />
          <FeaturedVideo>
            <FormattedMessage {...messages.video} />
            <VideoPanel
              src="https://www.youtube.com/embed/xO8Cz-9qKTI"
              allowFullScreen="true"
            />
            {/* <iframe
              display="block"
              margin="auto"
              title="cats"
              width="650"
              height="400"
              src="https://www.youtube.com/embed/DXRkXmEK44U"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            /> */}
          </FeaturedVideo>
        </div>
      </div>
    );
  }
}
