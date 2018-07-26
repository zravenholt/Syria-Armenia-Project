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
import Background from './Background';
import LinkContainer from './LinkContainer';
import Link from './Link';
import Header from './Header';
import Creator from './Creator';
import Creators from './Creators';
import CircleProfile from './CircleProfile';
import TextWrapper from './TextWrapper';
import TitleWrapper from './TitleWrapper';
import SmallName from './SmallName';
import About from './About';
import Title from './Title';
import Partners from './Partners';
import Partner from './Partner';
import PartnerImage from './PartnerImage';
import PartnerName from './PartnerName';
import UrlContainer from './UrlContainer';

import anoush from '../../images/Anoush.png';
import ani from '../../images/Ani.png';
import zane from '../../images/Zane.png';
import unhcr from '../../images/UNHCR.png';
import mission from '../../images/missionArmenia.png';
import peace from '../../images/Peace.jpg';
import aleppo from '../../images/aleppo.png';
import pomegranate from '../../images/pomegranate.png';

// import Rerooted from './Rerooted';
// import img from '../../images/rerooted.png';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      About: {
        name: 'About Our Project',
        blurb1:
          'The Syrian Civil War has now been raging for over seven years leaving a horrific toll on humanity in its wake. At least 400,000 lives have been lost, over half of the county’s population has been displaced, and the diverse, historic cultures and communities of Syria are at risk. The Rerooted oral history archive focuses on one of these unique, vibrant, and now vulnerable communities--Syrian-Armenians. The community is almost fully comprised of ancestors of survivors of the 1915 Armenian Genocide who came to Syria seeking refuge. Not only did the community survive but they thrived--creating prosperous neighborhoods and strong cultural institutions that preserved the Armenian language and culture in diaspora. Now, 100 years after the Genocide, the community faces another horror. Since 2011, more than half of the Armenian population living in Syria, mainly Aleppo,  has been forced to flee their homes due to the current conflict. Syrian-Armenians’ rich and historic communities, institutions, cultures, and traditions,  have been left in disarray and are in danger of being lost to history.',
        blurb2:
          'Rerooted focuses on collecting the narratives of some of the estimated 20,000 Syrian-Armenian refugees currently resettled in Armenia, which, according to the UN Refugee Agency, has the European region’s third-highest refugee population per capita. It is urgent and imperative that there be an effort to document the pre- and post-conflict narratives of these refugees. Such documentation will not only capture a snapshot of this time in history, but it will also help to humanize the aggregate statistics regarding the millions of Syrian refugees currently rebuilding their lives not only in Armenia but also across the Middle East and Europe. Having such an archive is valuable at this specific global moment while the world reckons with how to resettle displaced Syrians outside of their country and how the deep wounds and divisions of war could be repaired within the country.',
        blurb3:
          'Thank you for visiting our site, and please continue visiting us for our frequent updates. We will keep posting more of our over 60 interviews, and plan to have the interviews as well as English and Western Armenian transcripts available for each. We want to make our website, videos, and transcripts available for many purposes-- be it for educational, advocacy or scholarly pursuits. Our interviews of a community twice displaced in 100 years have so much to share with a wide audience in our current political climate--whether about refugee integration policy, sectarian relations in the Middle East, or the effects of displacement on ethnic minorities. We will be exploring these messages through talks, lesson plans, and connections with educational institutions that will ensure our archive is utilized and shared widely.',
        blurb4:
          'We encourage you to stay in touch with Rerooted with your questions, suggestions, or simply sharing with us how you are utilizing this archive. Please send your correspondence to rerooted.archive@gmail.com. We are so thankful to our partners listed below and the following individuals for their support of this project: Hagop Kazanjian, Garen Balkhian, Annie Akkam, Gohar Khachatrian, Raya Sargsyan, Astghik Sargysan, and Jennifer Papazian.',
        blurb5: 'Sirov,',
        blurb6: 'Ani and Anoush',
      },
      Zane: {
        name: 'Zane Ravenholt',
        img: zane,
        blurb1:
          'Zane Ravenholt (26) is a 2015 graduate from Claremont McKenna College, where he majored in Neuroscience and Economics. After working as a clinical researcher for UCSF for several years after graduating, he switched careers into Software Engineering. Throughout his still young life, he has had the luck and privilege to travel to over 45 countries with his family and friends, exposing him to foreign cultures, ideas, and ways of life.',
        blurb2:
          "Because of his extensive travels and experiences, he has a keen interest in international affairs, as well as helping those who have been less fortunate than him. Some of his contributions to date include building soccer fields for impoverished areas of Uganda, volunteering over 900 hours at the Veteran's Affairs Hospital working with disabled veterans, and working with non-profits to improve and preserve the local ecosystems in his home state of Washington.",
        blurb3:
          'Currently, Zane works as a Solution Architect for Qordoba, a startup in San Francisco focused on helping companies internationalize. In his down time, he enjoys sports, any and all videogames, and planning for the next step in his international travels. Looking towards the future, he is interested in continuing to develop his software skills, seeking new lands and experiences, and continuing to give back to those who need it most.',
      },
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
        <div>
          <Background />
        </div>
        <div>
          <LinkContainer>
            <Link href="/people" to="/people">
              Profiles
            </Link>
            <Link href="/" to="/">
              Home
            </Link>
            <Link href="/archives" to="/archives">
              Archives
            </Link>
          </LinkContainer>
          <Header>About Us</Header>
          <Creators>
            <About>
              <Title>{this.state.About.name}</Title>
              <TextWrapper>{this.state.About.blurb1}</TextWrapper>
              <TextWrapper>{this.state.About.blurb2}</TextWrapper>
              <TextWrapper>{this.state.About.blurb3}</TextWrapper>
              <TextWrapper>{this.state.About.blurb4}</TextWrapper>
              <TextWrapper>{this.state.About.blurb5}</TextWrapper>
              <TextWrapper>{this.state.About.blurb6}</TextWrapper>
            </About>
          </Creators>
          <Creators>
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
            <Creator>
              <CircleProfile src={this.state.Zane.img} />
              <SmallName>{this.state.Zane.name}</SmallName>
              <SmallName>Website Creator</SmallName>
              <TextWrapper>{this.state.Zane.blurb1}</TextWrapper>
              <TextWrapper>{this.state.Zane.blurb2}</TextWrapper>
              <TextWrapper>{this.state.Zane.blurb3}</TextWrapper>
            </Creator>
          </Creators>
          <TitleWrapper>
            <Title>Our Partners</Title>
            <Partners>
              <Partner>
                <PartnerName>UNHCR</PartnerName>
                <PartnerImage src={unhcr} />
                <UrlContainer href="http://www.unhcr.org/armenia.html">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>Mission Armenia</PartnerName>
                <PartnerImage src={mission} />
                <UrlContainer href="http://www.mission.am/NEW/index.php">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>Aleppo NGO</PartnerName>
                <PartnerImage src={aleppo} />
                <UrlContainer href="https://aleppo-ngo.org/">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>Davis Projects for Peace</PartnerName>
                <PartnerImage src={peace} />
                <UrlContainer href="http://www.davisprojectsforpeace.org/">
                  Visit their site
                </UrlContainer>
              </Partner>
              <Partner>
                <PartnerName>The Pomegranate Foundation</PartnerName>
                <PartnerImage src={pomegranate} />
                <UrlContainer href="http://pomegranatefoundation.org/">
                  Visit their site
                </UrlContainer>
              </Partner>
            </Partners>
            <SmallName>Please follow us at:</SmallName>
            <UrlContainer href="https://www.instagram.com/rerooted.archive/">
              @rerooted.archive on Instagram
            </UrlContainer>
            <UrlContainer href="https://www.facebook.com/Rerooted.Archive">
              Our Facebook
            </UrlContainer>
            <UrlContainer href="https://www.twitter.com">
              @RerootedArchive on Twitter
            </UrlContainer>
          </TitleWrapper>
        </div>
      </div>
    );
  }
}
