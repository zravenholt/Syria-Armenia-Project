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
import Creator from './Creator';
import CreatorWrapper from './Creators';
import CircleProfile from '../CircleProfile';
import TextWrapper from '../TextWrapper';
// import TitleWrapper from '../TitleWrapper';
import SmallName from '../SmallName';
import anoush from '../../../images/Anoush.png';
import ani from '../../../images/Ani.png';

/* eslint-disable react/prefer-stateless-function */
export default class Creators extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Anoush: {
        name: 'Anoush Baghdassarian',
        img: anoush,
        blurb1:
          'Anoush Baghdassarian (23) holds an Honors Bachelors Degree from Claremont McKenna College, Magna Cum Laude, in Psychology and Spanish with a sequence in Holocaust and Human Rights studies. While in undergrad she made the most of the opportunities at the Mgrublian Center for Human Rights, working with asylum seekers, victims of human trafficking, holocaust survivors, and scholars on genocide and crimes against humanity.',
        blurb2:
          'Anoush has interned at various human rights organizations throughout her undergraduate career including Human Rights Watch and the Cardozo Law Institute in Holocaust and Human Rights. Most recently, she has served as an advisor to the Armenian Permanent Mission to the United Nations, as well as an intern at the Ombudsman Human Rights Defender’s Office in Yerevan, Armenia.',
        blurb3:
          "In addition to these experiences, Anoush is a published author of a historical fiction play about the Armenian Genocide entitled FOUND which has been presented at book events in California, New York, Uruguay, and Argentina, as well as has been produced for stage productions in New York and California. She has also written a play in Spanish about Argentina's last military dictatorship, and is in the beginning stages of writing a play about the experience of Syrian-Armenians as her Action Project for the Humanity in Action fellowship based on the testimonies in this archive.",
        blurb4:
          'With the goal of working on international cases of genocide, forced migration, and crimes against humanity, Anoush plans to continue her education. She will pursue a Masters in Human Rights Studies at Columbia University in September of 2018 before attending law school the following year to study human rights law.',
      },
      Ani: {
        name: 'Ani Schug',
        img: ani,
        blurb1:
          'Ani Schug (23) is a proud American-Armenian calling the Diaspora community in Philadelphia home. She attended the Armenian Sisters’ Academy there, and then moved out to California to attend Pomona College. There, she majored in Politics, minored in Middle Eastern Studies, and studied the languages of Arabic, Spanish, and Swahili. Ani also worked at the Draper Center for Community Partnerships where she implemented mutually-beneficial community projects between college students, service staff, and surrounding neighborhoods. She strongly believes in the power of creative collaboration to bring communities together and develop new solutions to local and global problems.',
        blurb2:
          'Through her community and academic work, Ani has engaged with many historical and current Middle Eastern communities including translating historical texts about Armenian women fedayi fighters during the Genocide, coordinating an English class Iraqi refugees in Amman, Jordan, and supporting resettlement efforts for Syrian refugees in California.',
        blurb3:
          'Ani was excited to co-found the Rerooted Archive with Anoush in order to preserve this unique history of both displacement and community-creation of one of the most important Armenian Diaspora communities. She also thinks it is important to share diverse, on-the-ground perspectives from a minority community in Syria in order to re-examine and diversify current knowledge production on the subject of minorities in the Middle East.',
        blurb4:
          'Currently, Ani works as a paralegal at an immigration law firm, but she looks forward to a future career continuing to explore current and historical interactions between Armenians and their surrounding communities.',
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
          <Link href="/about" to="/about">
            About
            <Dropdown>
              <InnerLink href="/about/creators" to="/about">
                Creators
              </InnerLink>
            </Dropdown>
          </Link>
          <Link href="/people" to="/people">
            Profiles
            <Dropdown id="drop2">ITEM</Dropdown>
          </Link>
          <Link href="/archives" to="/archives">
            Archive
            <Dropdown id="drop3">ITEM</Dropdown>
          </Link>
          <Link href="/partners" to="/partners">
            Partners
            <Dropdown id="drop3">ITEM</Dropdown>
          </Link>
          <Link href="/volunteer" to="/volunteer">
            Get Involved
            <Dropdown id="drop3">ITEM</Dropdown>
          </Link>
        </LinkContainer>
        <Header>About the Creators</Header>
        <CreatorWrapper>
          <Creator>
            <CircleProfile src={this.state.Anoush.img} />
            <SmallName>{this.state.Anoush.name}</SmallName>
            <SmallName>Co-Creator</SmallName>
            <TextWrapper>{this.state.Anoush.blurb1}</TextWrapper>
            <TextWrapper>{this.state.Anoush.blurb2}</TextWrapper>
            <TextWrapper>{this.state.Anoush.blurb3}</TextWrapper>
            <TextWrapper>{this.state.Anoush.blurb4}</TextWrapper>
          </Creator>
          <Creator>
            <CircleProfile src={this.state.Ani.img} />
            <SmallName>{this.state.Ani.name}</SmallName>
            <SmallName>Co-Creator</SmallName>
            <TextWrapper>{this.state.Ani.blurb1}</TextWrapper>
            <TextWrapper>{this.state.Ani.blurb2}</TextWrapper>
            <TextWrapper>{this.state.Ani.blurb3}</TextWrapper>
            <TextWrapper>{this.state.Ani.blurb4}</TextWrapper>
          </Creator>
        </CreatorWrapper>
      </div>
    );
  }
}
