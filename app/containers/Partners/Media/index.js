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
import SmallName from './SmallName';

import EP1 from '../../../images/EnglishPress1.png';
import EP2 from '../../../images/EnglishPress2.png';
import EP3 from '../../../images/EnglishPress3.jpg';
import EP4 from '../../../images/EnglishPress4.png';

import AP1 from '../../../images/ArmenianPress1.jpg';
import AP2 from '../../../images/ArmenianPress2.png';

import P1 from '../../../images/Presentation1.png';
import P2 from '../../../images/Presentation2.png';
import P3 from '../../../images/Presentation3.png';
import P4 from '../../../images/Presentation4.jpg';

// import Rerooted from './Rerooted';
// import img from '../../images/rerooted.png';

const imageHelper = {
  display: 'inline-block',
  height: '100%',
  verticalAlign: 'middle',
};

/* eslint-disable react/prefer-stateless-function */
export default class Media extends React.PureComponent {
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
          <Header>Media</Header>
          <TitleWrapper>
            <PartnerName>English Language Press / Publications</PartnerName>
            <Partners>
              <Partner href="https://aleppo-ngo.org/rerooted-largest-syrian-armenian-testimony-archive-presented-in-armenia/">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={EP1} />
                </ImageWrapper>
                <SmallName>
                  “Rerooted”: Largest Syrian-Armenian Testimony Archive
                  Presented in Armenia,” July 30, 2018.
                </SmallName>
              </Partner>
              <Partner href="https://www.cmc.edu/news/project-for-peace-and-power-of-preserving-refugees%E2%80%99-stories">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={EP2} />
                </ImageWrapper>
                <SmallName>
                  “A Project for Peace and the power of preserving refugees’
                  stories,” February 2, 2018.
                </SmallName>
              </Partner>
              <Partner href="https://www.ideasandian.com/makerswall/rerooted">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={EP3} />
                </ImageWrapper>
                <SmallName>
                  “Awesome projects made by awesome people under 25, Rerooted,”
                  August 9, 2018.
                </SmallName>
              </Partner>
              <Partner href="https://www.cambridge.org/core/journals/review-of-middle-east-studies">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={EP4} />
                </ImageWrapper>
                <SmallName>
                  “Cambridge University Press Review of Middle East Studies, 52
                  vol., issue 2”
                </SmallName>
              </Partner>
            </Partners>
            <PartnerName>Armenian Language Press</PartnerName>
            <Partners>
              <Partner href="https://bit.ly/2wy55FU">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={AP1} />
                </ImageWrapper>
                <SmallName>
                  “Rerooted. Վաւերագրել Սուրիահայերու Պատմութիւնները,” August
                  31, 2018.
                </SmallName>
              </Partner>
              <Partner href="https://aleppo-ngo.org/hy/rerooted-largest-syrian-armenian-testimony-archive-presented-in-armenia/">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={AP2} />
                </ImageWrapper>
                <SmallName>
                  “«ReRooted» ծրագիրը կյանքի է կոչվում «ՀԱԼԵՊ» ՀԿ-ից,” July 30,
                  2018.
                </SmallName>
              </Partner>
            </Partners>
            <PartnerName>Presentations</PartnerName>
            <Partners>
              <Partner href="http://www.pilgrimplace.org/">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={P1} />
                </ImageWrapper>
                <SmallName>
                  Pilgrim Place, a senior community committed to justice and
                  peace, February 2018.
                </SmallName>
              </Partner>
              <Partner href="https://www.youtube.com/watch?v=FqjWMhMP2J8">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={P2} />
                </ImageWrapper>
                <SmallName>
                  Marian Miner Cook, Athenaeum, February 2018.
                </SmallName>
              </Partner>
              <Partner href="https://www.agbumhs.org/hs/about/mission.jsp">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={P3} />
                </ImageWrapper>
                <SmallName>
                  Armenian General Benevolent Union Vatche and Tamar Manoukian
                  High School, October 2018.
                </SmallName>
              </Partner>
              <Partner href="https://www.mskh.am/en">
                <ImageWrapper>
                  <div style={imageHelper}> </div>
                  <PartnerImage src={P4} />
                </ImageWrapper>
                <SmallName>
                  Mkhitar Sebastatsi Educational Complex, November 2018.
                </SmallName>
              </Partner>
            </Partners>
          </TitleWrapper>
        </div>
      </div>
    );
  }
}
