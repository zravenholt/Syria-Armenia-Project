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

// name
// date
// location of interview
// Inverviewer
// Translator

import React from 'react';

// Menu Imports
import Link from './Link';
import LinkContainer from './LinkContainer';
import HomeLink from './HomeLink';
import InnerLink from './InnerLink';
import Dropdown from './Dropdown';

import Header from './Header';
import Paragraph from './Creator';
import ParagraphWrapper from './Creators';
import ParagraphTitle from './ParagraphTitle';
import ParagraphBullet from './ParagraphBullet';
import TextWrapper from '../TextWrapper';
import VideoContainer from './VideoContainer';
// import TitleWrapper from '../TitleWrapper';

/* eslint-disable react/prefer-stateless-function */
export default class Creators extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Project: {
        blurb1:
          'The Rerooted Archive preserves personal, on-the-ground perspectives about Syrian-Armenian history from its roots of survival, to its vibrancy in Syria, to the precipice of dispersion. By saving these stories of the past, we aim to secure their place in future histories and have a positive impact on the present, through advocating for the community’s needs in Syria, Armenia, and beyond. ',
        blurb2:
          'The Syrian Civil War has now been raging for over seven years leaving a horrific toll on humanity in its wake. At least half a million lives have been lost, over half of the county’s population has been displaced, and the diverse, historic cultures and communities of Syria are at risk.',
        blurb3:
          'Rerooted preserves the narratives of the Syrian-Armenian community around the world, having so far collected over 100 interviews from among the estimated 20,000 Syrian-Armenian refugees who have resettled in Armenia. Having such an archive is valuable at this specific global moment when the world must reckon with how to resettle displaced Syrians outside of their country and how the deep wounds and divisions of war could be repaired within the country. Overall, this archive aims to fulfill three main goals: preservation, education, and humanization.',
        blurb4:
          'It is important to preserve the narratives of vulnerable or destroyed/displaced communities so that they do not become lost to history. This archive is a contribution to the documentation efforts of Armenian history, culture, and identity, around the world. More specifically, it is an effort to capture a snapshot of the unique, vibrant, and now vulnerable communities of Syrian-Armenians. The communities were almost fully comprised of ancestors of survivors of the 1915 Armenian Genocide who came to Syria seeking refuge. Not only did these communities survive but they thrived--creating prosperous neighborhoods and strong cultural institutions that preserved the Armenian language and culture in diaspora. Now, 100 years after the Genocide, the communities face another horror. Since 2011, more than half of the Armenian population living in Syria, mainly Aleppo, has been forced to flee their homes due to the current conflict. Syrian-Armenians’ rich and historic communities, institutions, cultures, and traditions, have been left in disarray and are in danger of being lost to history.',
        blurb5:
          'Rerooted preserves the narratives of the Syrian-Armenian community around the world, having so far collected over 100 interviews from among the estimated 20,000 Syrian-Armenian refugees who have resettled in Armenia. Having such an archive is valuable at this specific global moment when the world must reckon with how to resettle displaced Syrians outside of their country and how the deep wounds and divisions of war could be repaired within the country. Overall, this archive aims to fulfill three main goals: preservation, education, and humanization.',
        blurb6:
          'Throughout the current conflict in Syria, news outlets have reported often on the grave statistics of what is occurring and who is being affected. But those numbers don’t often lead to action. Instead, stories and faces and people inspire change.. So, we hope that by shedding light on the stories of individuals in our archive, we can spur action. In particular...',
        blurb7:
          'The first step to solving a problem is recognition. Unfortunately, not many know about the situation of Armenians in Syria and this archive is an incredible way to promote journalism and reporting on the situation. Such reporting can lead to pressure on those committing, or funding, the violence and at the very least, can put this important community on the international community’s radar.',
        blurb8:
          'We hope that this archive can help make people aware of the current issues facing Syrian-Armenians and thus feel encouraged to provide aid either financially, scholarly, or in a humanitarian way, to help ease the burden of these refugees.',
        blurb9:
          'Should a tribunal ever open for war crimes in Syria, this could be a potentially important source of testimony research for the lawyers constructing such a case.',
        blurb10:
          'Thank you for visiting our site. Our public archive is still in its beginning stages of development, however we have made it public so you can access the available interviews as early as possible. Please continue visiting our page for our frequent updates. We will keep posting more of our over 100 interviews, and plan to have the interviews available in English and Western Armenian, as well as transcripts available for each. There will also be more search functions, an interactive map feature, and lesson-plan material.',
        blurb11:
          'Our interviews of a community twice displaced in 100 years have so much to share with a wide audience in our current political climate--whether about refugee integration policy, sectarian relations in the Middle East, or the effects of displacement on minority communities. We will be exploring these messages through many mediums as we progress. We encourage you to stay in touch with Rerooted with your questions, suggestions, or simply sharing with us how you are utilizing this archive.',
      },
    };
  }

  render() {
    return (
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
        <Header>About the Project</Header>
        <ParagraphWrapper>
          <ParagraphTitle>Overview</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb1}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <VideoContainer
          src="https://www.youtube.com/embed/WtUGqsECg8s"
          allowFullScreen="true"
          controls
        />
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb2}</TextWrapper>
            <TextWrapper>{this.state.Project.blurb3}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Preservation</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb4}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Education</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb5}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Humanization</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb6}</TextWrapper>
            <ParagraphBullet>
              <strong>
                A voice to invoke pressure to mitigate the violence
              </strong>
            </ParagraphBullet>
            <TextWrapper>{this.state.Project.blurb7}</TextWrapper>
            <ParagraphBullet>
              <strong>An increase in aid to vulnerable communities</strong>
            </ParagraphBullet>
            <TextWrapper>{this.state.Project.blurb8}</TextWrapper>
            <ParagraphBullet>
              <strong>Seeking justice for victims</strong>
            </ParagraphBullet>
            <TextWrapper>{this.state.Project.blurb9}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>The Archive</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb10}</TextWrapper>
            <TextWrapper>{this.state.Project.blurb11}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
      </div>
    );
  }
}
