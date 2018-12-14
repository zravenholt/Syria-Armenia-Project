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
import CircleProfile from './CircleProfile';
import Creator from './Creator';
import Interpreters from './Interpreters';
import Interpreter from './Interpreter';
import CreatorWrapper from './CreatorWrapper';
import SmallName from './SmallName';
import InterpreterName from './InterpreterName';
import InterpreterProfile from './InterpreterProfile';
import BigName from './BigName';
import ParagraphBullet from './ParagraphBullet';
import TaskTitle from './TaskTitle';
import TextWrapper from './TextWrapper';
import Dropdown from './Dropdown';
import InnerLink from './InnerLink';
import HomeLink from './HomeLink';

import zane from '../../../images/Zane.png';
import annie from '../../../images/annie.png';
import garen from '../../../images/garen.png';
import hagop from '../../../images/hagop.png';

/* eslint-disable react/prefer-stateless-function */
export default class Contributors extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Zane: {
        name: 'Zane Ravenholt',
        img: zane,
        blurb1:
          'Zane Ravenholt is a 2015 graduate from Claremont McKenna College, where he majored in Neuroscience and Economics. After working as a clinical researcher for UCSF for several years after graduating, he switched careers into Software Engineering. Throughout his still young life, he has had the luck and privilege to travel to over 45 countries with his family and friends, exposing him to foreign cultures, ideas, and ways of life.',
        blurb2:
          "Because of his extensive travels and experiences, he has a keen interest in international affairs, as well as helping those who have been less fortunate than him. Some of his contributions to date include building soccer fields for impoverished areas of Uganda, volunteering over 900 hours at the Veteran's Affairs Hospital working with disabled veterans, and working with non-profits to improve and preserve the local ecosystems in his home state of Washington.",
        blurb3:
          'Currently, Zane works as a Solution Architect for Qordoba, a startup in San Francisco focused on helping companies internationalize. In his down time, he enjoys sports, any and all videogames, and planning for the next step in his international travels. Looking towards the future, he is interested in continuing to develop his software skills, seeking new lands and experiences, and continuing to give back to those who need it most.',
      },
    };
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
          <Header>Contributors</Header>
          <CreatorWrapper>
            <Creator>
              <BigName>Website Developer</BigName>
              <CircleProfile src={this.state.Zane.img} />
              <SmallName>{this.state.Zane.name}</SmallName>
              <TextWrapper>{this.state.Zane.blurb1}</TextWrapper>
              <TextWrapper>{this.state.Zane.blurb2}</TextWrapper>
              <TextWrapper>{this.state.Zane.blurb3}</TextWrapper>
              <TextWrapper>{this.state.Zane.blurb4}</TextWrapper>
            </Creator>
          </CreatorWrapper>
          <CreatorWrapper>
            <Interpreters>
              <BigName>Armenian Interpreters</BigName>
              <Interpreter>
                <InterpreterProfile src={annie} />
                <InterpreterName>Annie Akkam</InterpreterName>
              </Interpreter>
              <Interpreter>
                <InterpreterProfile src={garen} />
                <InterpreterName>Garen Balkhian</InterpreterName>
              </Interpreter>
              <Interpreter>
                <InterpreterProfile src={hagop} />
                <InterpreterName>Hagop Kazanjian</InterpreterName>
              </Interpreter>
            </Interpreters>
          </CreatorWrapper>
          <ParagraphBullet>
            <strong>Other Contributors</strong>
          </ParagraphBullet>
          <TaskTitle>
            <strong>Video Production: </strong>
            <span>Meredith Lawrence, Arooshee Giroti</span>
          </TaskTitle>
          <TaskTitle>
            <strong>Website Design: </strong>
            <span>Shant Charoian</span>
          </TaskTitle>
          <TaskTitle>
            <strong>Armenian Transcribers/Translators: </strong>
            <span>Gohar Khachatrian, Raya Sargsyan, Astghik Sargsyan</span>
          </TaskTitle>
        </div>
      </div>
    );
  }
}

// Trying to get Interpreter images horizontal and equally spaced on right side, then will add content beneath me and them to finish page
