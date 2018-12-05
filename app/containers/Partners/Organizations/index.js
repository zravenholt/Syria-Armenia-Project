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

import unhcr from '../../../images/UNHCR.png';
import mission from '../../../images/missionArmenia.png';
import peace from '../../../images/Peace.jpg';
import aleppo from '../../../images/aleppo.png';
import pomegranate from '../../../images/pomegranate.png';
import tufenkian from '../../../images/tufenkianFoundation.png';
import groundswell from '../../../images/groundswell.jpg';
import idea from '../../../images/ideaFoundation.png';
import missionEast from '../../../images/missionEast.jpg';

// import Rerooted from './Rerooted';
// import img from '../../images/rerooted.png';

const imageHelper = {
  display: 'inline-block',
  height: '100%',
  verticalAlign: 'middle',
};

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
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
            <Link href="/partners" to="/partners">
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
          <Header>Our Partners</Header>
          <TitleWrapper>
            <Partners>
              <Partner>
                <PartnerName>UNHCR</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={unhcr} />
                </ImageWrapper>
                <UrlContainer href="http://www.unhcr.org/armenia.html">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>Mission Armenia</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={mission} />
                </ImageWrapper>
                <UrlContainer href="http://www.mission.am/NEW/index.php">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>Aleppo NGO</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={aleppo} />
                </ImageWrapper>
                <UrlContainer href="https://aleppo-ngo.org/">
                  Visit their site
                </UrlContainer>
              </Partner>
            </Partners>
            <Partners>
              <Partner>
                <PartnerName>Davis Projects for Peace</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={peace} />
                </ImageWrapper>
                <UrlContainer href="http://www.davisprojectsforpeace.org/">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>The Pomegranate Foundation</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={pomegranate} />
                </ImageWrapper>
                <UrlContainer href="http://pomegranatefoundation.org/">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>Tufenkian Foundation</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={tufenkian} />
                </ImageWrapper>
                <UrlContainer href="http://www.tufenkianfoundation.org/">
                  Visit their site
                </UrlContainer>
              </Partner>
            </Partners>
            <Partners>
              <Partner>
                <PartnerName>Groundswell Oral History</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={groundswell} />
                </ImageWrapper>
                <UrlContainer href="http://www.oralhistoryforsocialchange.org/">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>Idea Foundation</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={idea} />
                </ImageWrapper>
                <UrlContainer href="https://www.idea.am">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>Mission East Armenia</PartnerName>
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={missionEast} />
                </ImageWrapper>
                <UrlContainer href="http://www.miseast.org/en/armenia/home">
                  Visit their site
                </UrlContainer>
              </Partner>
            </Partners>
          </TitleWrapper>
        </div>
      </div>
    );
  }
}
