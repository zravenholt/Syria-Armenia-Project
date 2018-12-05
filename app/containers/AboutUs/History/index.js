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
import TextWrapper from './TextWrapper';
import SmallTextWrapper from './SmallTextWrapper';
import ImageWrapper from './ImageWrapper';

import historySide1 from '../../../images/ArmeniaSurvivors.png';
import historySide2 from '../../../images/historySide2.png';
import historySide3 from '../../../images/historySide3.jpg';
import historySide4 from '../../../images/historySide4.jpg';
import historySide5 from '../../../images/historySide5.png';
import historySide6 from '../../../images/historySide6.png';
import historySide7 from '../../../images/historySide7.jpg';

import CircleProfile from './CircleProfile';

const sourcesStyles = {
  marginLeft: '15%',
  marginRight: '15%',
  width: '60%',
  paddingBottom: '20px',
};

/* eslint-disable react/prefer-stateless-function */
export default class History extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Project: {
        blurb1:
          'Armenians in Syria have a long and multi-faceted history. Despite the richness and complexity of this community, their history has not been extensively researched or shared. Thus, one of the aims of our archive is to publish a strong set of primary sources that will reveal on-the-ground perspectives to be analyzed and preserved.',
        blurb2:
          'Here we include a brief overview of the major historical events and patterns that have shaped the lives of Syrian Armenians over approximately 100 years. We hope that this history will give context to our archive of interviews, while still giving space for interviewees to share their personal and familial experiences on navigating through these episodes of history.',
        blurb3:
          'Armenian people have lived in lands now encompassed by the borders of Syria since the Middle Ages and well before. In fact, one of the main Armenian churches in Aleppo, Forty Martyrs Cathedral, dates back to the 15th century. However, the vast majority of Syria Armenians did not arrive to Syria until the wake of the Armenian Genocide of the early 20th century, perpetrated by the Ottoman Turkish government.',
        blurb4:
          'As Armenians were deported from their home towns and led on death marches, their final destination was horror in the deserts of Syria. First, many of the groups of Armenian victims were taken to Ottoman administrative centers, such as Aleppo. From there, they were marched out further into the wilderness, where they faced extreme starvation, thirst, fatigue and torture at the hands of Turkish guards. The river Euphrates ran red with the blood of the dead. Those who survived were led to concentration camps  and consequently mass graves. Some of the worst sites of violence took place in Der Zor, Meskene, Raqqa, Margadeh, Ras al-Ain (Kobani), and other sites across northern Syria. Until the present, people living in these lands would find the bones and remains of Armenians. In 1972, in a town called Alieh, a local shephard led Armenian leaders to an old Roman cistern that remained full of Armenian corpses. He then revealed that despite all of his efforts, he could never manage to have that land cultivate any crops. Today, these same lands continue to witness mass violence at the hands of the ISIS, the Syrian government, and other armed groups.',
        blurb5:
          'Despite the depth of terror that Armenians experienced in Syria, it was also the site of salvation for the living. Diasporan Armenians around the world understand that the care and hospitality of local Syrians, the already established Armenian community there, and international aid workers saved their ancestors who managed to survive the death marches. Armenians found places of refuge amongst local populations in towns all across Syria and the Levant, with one of the largest refugee camps established in the Meidan region of Aleppo (known as Nor Kiugh in Armenian). While many Armenians from the camps and orphanages in Syria eventually moved to Lebanon, Europe, or further West, many also remained and continued to build what is considered the “Mother Diaspora” community. From homelessness and life in tents, Armenians came together to re-establish schools and churches and to make their homes in Aleppo more permanent, brick by brick, stone by stone.',
        blurb6:
          'As Armenians started to re-grow their roots after tragedy, the lands they lived on were also going through major transformations. The Ottoman Empire had fallen, and European colonial powers were claiming its land, thus changing the internal boundaries of the region. Turkey seemed to permanently secure their control over the ancestral lands of the Armenians (as well as Kurds and Assyrians). And in 1924, a “Greater Syria” Mandate was established under French colonial control.  At this time, Armenian refugees in Syria were given Syrian citizenship, and had to determine how to navigate the fraught colonial political system of Syria. One of the basic tenets of French colonial rule was to “divide and conquer” by trying to make the interests of the ethno-religious minorities be at odds against the majority Sunni Muslim Arabs.',
        blurb7:
          'In 1946, Syria gained independence from Syria, but the political and social impacts of colonial rule would persist. From independence through the 1960s, Syria was mostly controlled by Arab Nationalist parties who aimed to bring together Syria as “one” to progress after colonialism. However, these efforts would try to erase the vast diversity within the new country. For Armenians, the government put limits on the relative autonomy they had enjoyed under French rule.   Armenians had to change the names of many of their cultural and religious institutions to have Arabic titles, they suffered the shut down of their media and news sources, they were unable to teach Armenian language and history in schools and instead were mandated to teach the official history distributed by the Syrian government. Despite these impositions, Armenians continued to maintain their culture, language, and religion in their own private ways.',
        blurb8:
          'Then, in 1970, Hafez al-Assad came to power, starting an authoritarian regime that continues until today under his son Bashar. In certain ways, the political strategies of the Assad mirrored the French, in trying to bargain for the loyalties of certain groups over others. It is very important to note that the experiences of different groups in Syria under the Assads varied greatly based on religion and ethnicity but also other factors such as class and level of urbanization. While certain minority groups experienced more freedom and protection, others, like Kurds, experienced violence, suppression of language, and disenfranchisement. Opposition political groups, like those who aligned themselves with political Islam also faced intense political repression.',
        blurb9:
          'For the Armenians under Assad, many of the previous restrictions on their cultural and religious institutions were eased, in the hopes of creating political trust among the Armenian community. During this time, Armenians strengthened their many institutions including churches, schools, political parties, NGOs, choirs, dance groups, and more. Armenians were well-respected and liked by their neighbors, and enjoyed freedom to express their ethnicity and religion publically without fear. However, government influence and surveillance did persist in certain spaces like in Armenian political parties and schools.',
        blurb10:
          'Despite all of these various political changes, Syrian-Armenian institutions have flourished  from the ashes of genocide. Over a century, the community produced generation after generation of Diasporan Armenians fluent in both Arabic and their mother tongue of Western Armenian and with strong connections to both Syrian and Armenian identities.',
        blurb11:
          'All of this rich history and culture was put in peril by the Syrian Civil War that started in 2011. Due to their past relationship with the Assad government, Armenians have been shielded from the worst of the bombardment by Government and Russian forces. Nevertheless, the community was severely damaged by cross-fire and direct attacks from certain armed opposition groups. Armenians were targeted by extreme groups like the Islamic State and Jabhat al-Nusra, who kidnapped and murdered Armenian community members. The Islamic State also destroyed important Armenian sites across Syria, perhaps most notably the chapel and monument to the victims of the Armenian Genocide of Der Zor. Armenian communities in cities like Aleppo were also decimated by shelling that turned tight communities of homes, churches, and schools to ruble.',
        blurb12:
          'Before the Syrian War, the number of Syrian-Armenians in Syria was estimated to be between 70,000 - 90,000 Armenians. Now, approximately 17,000 of them are in Armenia and about 25,000 have left for Jordan, Lebanon, and Western countries. Together, this means that at least 42,000 Syrian-Armenians have left their homes and communities behind to start new lives in new countries with new languages, cultures, and many other obstacles. More than half of the population has been dispersed and that is a threat to their history and traditions of the unique Syrian-Armenian Diaspora.',
        blurb13:
          'Syrian-Armenians again find themselves dispersed, as their ancestors were 100 years ago. And like before, each new community in its new location must navigate a different set of circumstances. Those who stayed behind face difficult daily conditions and an uncertain future. Those who went to Europe or the West, face surviving in totally new and foreign environments, amongst some unwelcoming views towards Middle Eastern refugees. And for the approximately 17,000 Syrian-Armenians who resettled in the Republic of Armenia, they remain among their culture, but still face many challenges of adapting to a new home. One of the main problems they face is affording life in Armenia’s difficult economy. Notably, most local Armenians own their homes, but newly-arriving Syrians have to pay very high rents on very low daily salaries. Despite such challenges, many find a lot of hope in resettling in a sort of “homeland” and have contributed a lot to the fabric of Armenian society over the past seven years.',
        blurb14:
          'This history covers just the major events that have occured over the past 100 years in the Syrian-Armenian community. This history of course is textured by the individual paths and lives of Syrian-Armenians, like those that are contained within the Rerooted Archive. As their history shows, Syrian-Armenians may have been “uprooted” 100 years ago in the Genocide and now in the wake of war, but this community have also always found a way to be “Rerooted,” then and now again.',
        side1: 'Survivors of the Armenian Genocide who reached Syria',
        side2:
          'Refugee Camp for survivors of the Armenian Genocide. Aleppo, Syria, 1922',
        side3:
          'Nor Kiugh, the main Armenian neighborhood of Aleppo, built out of the previous refugee camp.  1931',
        side4: 'St. Gregory Armenian Apostolic Church. Aleppo, 1931',
        side5: 'Armenian song books printed in Aleppo, Syria.',
        side6: 'Ruble of an apartment of an Armenian family in Aleppo, Syria',
        side7:
          'Sign for the “Aleppo Market” for Syrian-Armenian vendors. Yerevan, Armenia, 2017',
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
        <Header>Historical Context</Header>
        <ImageWrapper>
          <CircleProfile src={historySide1} />
          <SmallTextWrapper>{this.state.Project.side1}</SmallTextWrapper>
        </ImageWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb1}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb2}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Genocide</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb3}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ImageWrapper>
          <CircleProfile src={historySide2} />
          <SmallTextWrapper>{this.state.Project.side2}</SmallTextWrapper>
        </ImageWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb4}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Post-Genocide Transitions</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb5}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ImageWrapper>
          <CircleProfile src={historySide3} />
          <SmallTextWrapper>{this.state.Project.side3}</SmallTextWrapper>
        </ImageWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb6}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Post-Syrian Independence</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb7}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ImageWrapper>
          <CircleProfile src={historySide4} />
          <SmallTextWrapper>{this.state.Project.side4}</SmallTextWrapper>
        </ImageWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>The Assad Era</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb8}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb9}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ImageWrapper>
          <CircleProfile src={historySide5} />
          <SmallTextWrapper>{this.state.Project.side5}</SmallTextWrapper>
        </ImageWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb10}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Current Conflict</ParagraphTitle>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb11}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ImageWrapper>
          <CircleProfile src={historySide6} />
          <SmallTextWrapper>{this.state.Project.side6}</SmallTextWrapper>
        </ImageWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb12}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb13}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ImageWrapper>
          <CircleProfile src={historySide7} />
          <SmallTextWrapper>{this.state.Project.side7}</SmallTextWrapper>
        </ImageWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <TextWrapper>{this.state.Project.blurb14}</TextWrapper>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Sources and Further Reading</ParagraphTitle>
        </ParagraphWrapper>
        <ul>
          <li style={sourcesStyles}>
            <div>
              Migliorino, Nicola. “‘Kulna Suriyyin’? The Armenian community and
              the State in contemporary Syria,”&nbsp;
              <i>
                Revue de Mondes Musulmans et de la Méditerranée, December 2006.
              </i>
            </div>
            <a href="https://journals.openedition.org/remmm/3020#tocto1n3">
              https://journals.openedition.org/remmm/3020#tocto1n3
            </a>
          </li>
          <li style={sourcesStyles}>
            <div>
              Altug, Seda.&nbsp;
              <i>
                Revue de Mondes Musulmans et de la Méditerranée, December
                2006.&nbsp;
              </i>
              The Armenian Weekly, April 2012.
            </div>
            <a href="https://armenianweekly.com/2012/07/05/syrian-armenian-memory-and-the-refugee-issue-in-syria-under-the-french-mandate-1921-46/">
              https://armenianweekly.com/2012/07/05/syrian-armenian-memory-and-the-refugee-issue-in-syria-under-the-french-mandate-1921-46/
            </a>
          </li>
          <li style={sourcesStyles}>
            <div>
              Jebejian, Robert, &nbsp;
              <i>
                Routes and Centers of Annihilation of Armenian Deportees in 1915
                within the Boundaries of Syria, &nbsp;
              </i>
              Aleppo, 1994.
            </div>
          </li>
          <li style={sourcesStyles}>
            <div>
              Jebejian, Robert, &nbsp;
              <i>The Armenian Refugee Camp in Aleppo, &nbsp;</i>
              Aleppo, 1994.
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
