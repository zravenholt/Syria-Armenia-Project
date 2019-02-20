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
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import Background from './background';
// import Title from './Title';
// import Blurb from './Blurb';
// import FeaturedVideo from './FeaturedVideo';
// import Separator from './separator';
import Link from './Link';
import InnerLink from './InnerLink';
import Gif from './Gif';
import LinkContainer from './LinkContainer';
import Dropdown from './Dropdown';
// import VideoPanel from './VideoPanel';
import VideoBackground from './VideoBackground';
import VideoForeground from './VideoForeground';
// import Rerooted from './Rerooted';
import logo from '../../images/rerooted.gif';

const videoStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const backgroundStyles = {
  backgroundColor: '#6B6B6B',
};

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    console.log('Homepage Rendered');
    return (
      <div style={backgroundStyles}>
        <div>
          {/* <Background /> */}
          {/* <VideoBackground>
            <VideoForeground>
              <iframe
                title="test"
                src="https://www.youtube.com/embed/q2AIoBk3phk?autoplay=1&modestbranding=0&controls=0&mute=1&loop=1&playlist=q2AIoBk3phk"
                frameBorder="0"
                allowFullScreen
                style={videoStyles}
              />
            </VideoForeground>
          </VideoBackground> */}
        </div>
        <div style={backgroundStyles}>
          <LinkContainer>
            <Gif src={logo} />
            <Link href="/about/project" to="/about/project">
              About
              <Dropdown>
                <InnerLink href="/about/project" to="/about/project">
                  Project
                </InnerLink>
                <InnerLink href="/about/creators" to="/about/creators">
                  Creators
                </InnerLink>
                <InnerLink href="/about/history" to="/about/history">
                  History
                </InnerLink>
              </Dropdown>
            </Link>
            <Link href="/people" to="/people">
              Profiles
            </Link>
            <Link href="/archives" to="/archives">
              Archive
            </Link>
            <Link href="/partners/organizations" to="/partners/organizations">
              Partners
              <Dropdown>
                <InnerLink
                  href="/partners/organizations"
                  to="/partners/organizations"
                >
                  Organizations
                </InnerLink>
                <InnerLink
                  href="/partners/contributors"
                  to="/partners/contributors"
                >
                  Contributors
                </InnerLink>
                <InnerLink href="/partners/media" to="/partners/media">
                  Media
                </InnerLink>
              </Dropdown>
            </Link>
            <Link href="/volunteer" to="/volunteer">
              Get Involved
            </Link>
          </LinkContainer>
          <VideoBackground>
            <VideoForeground>
              <iframe
                title="test"
                src="https://www.youtube.com/embed/q2AIoBk3phk?autoplay=1&modestbranding=0&controls=0&mute=1&loop=1&playlist=q2AIoBk3phk"
                frameBorder="0"
                allowFullScreen
                style={videoStyles}
              />
            </VideoForeground>
          </VideoBackground>
          {/* <Title>
            <FormattedMessage {...messages.header} />
          </Title> */}
          {/* <Rerooted src={img} /> */}
          {/* <Blurb>
            <FormattedMessage {...messages.blurb} />
          </Blurb> */}
          {/* <Separator />
          <FeaturedVideo>
            <FormattedMessage {...messages.video} />
            <VideoPanel
              src="https://www.youtube.com/embed/Z2xUDCkf78M"
              allowFullScreen="true"
            />
          </FeaturedVideo> */}
        </div>
      </div>
    );
  }
}
