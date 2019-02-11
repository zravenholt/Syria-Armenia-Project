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
import LinkContainer from './LinkContainer';
import Link from './Link';
import Header from './Header';
import TitleWrapper from './TitleWrapper';
import ImageWrapper from './ImageWrapper';
import Partners from './Partners';
import Partner from './Partner';
import Dropdown from './Dropdown';
import InnerLink from './InnerLink';
import HomeLink from './HomeLink';
import PartnerImage from './PartnerImage';
import PartnerName from './PartnerName';
import UrlContainer from './UrlContainer';
import Paragraph from './Paragraph';
import TextWrapper from './TextWrapper';

import Youtube from '../../images/Youtube.png';
import Facebook from '../../images/Facebook.png';
import Twitter from '../../images/Twitter.png';
import Instagram from '../../images/Instagram.jpg';

// import Rerooted from './Rerooted';
// import img from '../../images/rerooted.png';

const imageHelper = {
  display: 'inline-block',
  height: '100%',
  verticalAlign: 'middle',
};

/* eslint-disable react/prefer-stateless-function */
export default class Involved extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <LinkContainer>
            <HomeLink href="/" to="/">
              ReRooted
            </HomeLink>
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
          <Header>Get Involved</Header>
          <TitleWrapper>
            <PartnerName>Follow us on social media!</PartnerName>
            <Partners>
              <Partner>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={Instagram} />
                </ImageWrapper>
                <UrlContainer href="https://www.instagram.com/rerooted.archive/">
                  @rerooted.archive
                </UrlContainer>
              </Partner>
              <Partner>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={Facebook} />
                </ImageWrapper>
                <UrlContainer href="https://www.facebook.com/Rerooted.Archive">
                  Our Facebook
                </UrlContainer>
              </Partner>
              <Partner>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={Twitter} />
                </ImageWrapper>
                <UrlContainer href="https://www.twitter.com">
                  @RerootedArchive
                </UrlContainer>
              </Partner>
              <Partner>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={Youtube} />
                </ImageWrapper>
                <UrlContainer href="https://www.youtube.com/channel/UCm94f76IJncd9nI0wo6keUw">
                  Our Youtube Channel
                </UrlContainer>
              </Partner>
            </Partners>
            <PartnerName>Collaborate with us</PartnerName>
            <Paragraph>
              <TextWrapper>
                We would love to hear from our audience and participants. Please
                reach out with your questions, comments, or ideas for
                collaboration. Tell us why you are visiting the archive or why
                it is important to you. Or you can even get to reach out to
                share your own story to be preserved in the archive
              </TextWrapper>
            </Paragraph>
            <Paragraph>
              <TextWrapper>
                Please send your correspondence to
                <b>&nbsp;rerooted.archive@gmail.com</b>
                &nbsp;or sign up below to receive updates from ReRooted.
              </TextWrapper>
            </Paragraph>
            <Paragraph>
              <iframe
                title="googleForm"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfBYqSrOvTpHk4xUtjPBYk4pz7j_ZP1YgEJfjoTkizZ5oBkMQ/viewform?embedded=true"
                width="640"
                height="666"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading...
              </iframe>
            </Paragraph>
          </TitleWrapper>
        </div>
      </div>
    );
  }
}
