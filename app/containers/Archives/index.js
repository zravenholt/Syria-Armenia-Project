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
// import video from 'file-loader!../../assets/Abdullah_Haddad_Full_Interview.mov';
import track from 'file-loader!../../assets/test.vtt';
import Link from './Link';
import HomeLink from './HomeLink';
import InnerLink from './InnerLink';
import HoverText from './HoverText';
import Dropdown from './Dropdown';
import Header from './Header';
import ListWrapper from './ListWrapper';
import VideoTitle from './VideoTitle';
import Modal from './Modal';
import Filter from './Filter';
import Search from './Input';
import SearchContainer from './SearchContainer';
// import Background from './Background';
import LinkContainer from './LinkContainer';

const ulHelper = {
  listStyle: 'none',
  paddingLeft: '0',
};

/* eslint-disable react/prefer-stateless-function */
export default class Archives extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedVideo: null,
      selectedVideos: null,
      VideoList: [
        {
          videoName: 'Video of Angel Ajemian',
          url: 'https://www.youtube.com/embed/k-YK154hxO0',
          script: track,
          name: 'Angel Ajemian',
          age: 37,
          gender: 'Female',
          birthplace: 'Kuwait',
          cityOfResidence: 'Yerevan, Armenia',
          date: '7/26/2017',
          englishPDF:
            'https://drive.google.com/open?id=1HYmXe7H0TpuWvOWfqsf9BhGtWX-nA2jI',
          ancestralCity: 'Sassoun',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Angel Ajemian was born in Kuwait but lived the majority of her life in Aleppo where she taught in an Armenian school and then got married and raised her three children. The war changed everything. Her husband and father-in-law were kidnapped and eventually killed by ISIS, prompting Angel to flee to Armenia with her children.',
        },
        {
          videoName: 'Video of Linda Arakel',
          url: 'https://www.youtube.com/embed/OduWA8zCjec',
          script: track,
          name: 'Linda Arakel',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=1Awqs9WxELC_BOec5eNa-ck3_CZw8NMQa',
          age: 32,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Sassoun',
          gender: 'Female',
          date: '8/10/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Linda Arakel and Hagop Atikian are a strong and loving married couple from Aleppo. They wanted to give their children a better life than they had, but with the war, tragedy struck. After surviving bombings, multiple displacements inside Syria, and the harrowing kidnapping of their children, Linda and Hagop fled with their children to Artsakh where the challenges only continued.',
        },
        {
          videoName: 'Video of Hagop Atikian',
          url: 'https://www.youtube.com/embed/OduWA8zCjec',
          script: track,
          name: 'Hagop Atikian',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=1Awqs9WxELC_BOec5eNa-ck3_CZw8NMQa',
          age: 44,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Musaler and Iskanderun',
          gender: 'Male',
          date: '8/3/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Hagop Atikian and Linda Arakel are a strong and loving married couple from Aleppo. They wanted to give their children a better life than they had, but with the war, tragedy struck. After surviving bombings, multiple displacements inside Syria, and the harrowing kidnapping of their children, Linda and Hagop fled with their children to Artsakh where the challenges only continued.',
        },
        {
          videoName: 'Video of Toros Ayranjian',
          url: 'https://www.youtube.com/embed/sQkWmaDANto',
          script: track,
          name: 'Toros Ayranjian',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=10AENX7NyfFAwPm9jNVfBltvlrY9JS1Na',
          age: 75,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Marash',
          gender: 'Male',
          date: '8/16/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Toros Ayranjian was born in Aleppo, Syria, without the ability to hear. He was involved in activities among the deaf community in Aleppo and worked as barber to provide for his wife, Takouhi, and five children. Now, a grandfather to nine, Toros lives with Takouhi in Mission Armenia social housing, far away from the rest of their family.',
        },
        {
          videoName: 'Video of Takouhi Bedros',
          url: 'https://www.youtube.com/embed/sQkWmaDANto',
          script: track,
          name: 'Takouhi Bedros',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=10AENX7NyfFAwPm9jNVfBltvlrY9JS1Na',
          age: 63,
          birthplace: 'Der Zor, Syria',
          ancestralCity: 'Dikranagerd and Kharpert',
          gender: 'Female',
          date: '8/16/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Takouhi Bedros was born in Der Zor, Syria and spent much of her childhood at Armenian orphanages in Lebanon. She got married as a young teenager and has spent her life lovingly caring for her hard-of-hearing husband, Toros, even through war in Syria and a difficult resettlement in Armenia. They now live in Mission Armenia’s social housing.',
        },
        {
          videoName: 'Video of Sona Gildalian',
          url: 'https://www.youtube.com/embed/pM6_m6EA-E4',
          script: track,
          name: 'Sona Gildalian',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=1u6gxjTcd3q-irWG6k0SO-ArAuC2UXnXW',
          age: 62,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Ainteb',
          gender: 'Female',
          date: '8/3/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Sona Gildalian was born and raised in Aleppo. Her family could not afford her schooling past sixth grade, so she began work as a seamstress from a young age. After unknown gunmen attacked her apartment building, Sona came to live with her brother in Armenia. With only one bag and the clothes on her back, Sona had to restart her life in Yerevan.',
        },
        {
          videoName: 'Video of Abdullah George Haddad',
          url: 'https://www.youtube.com/embed/N016Ka053tQ',
          script: track,
          name: 'Abdullah George Haddad',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=100NjEv0ezt2yBmDZqPs36jkDDm5GG3F0',
          age: 53,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Ainteb',
          gender: 'Male',
          date: '7/25/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Abdullah Haddad grew up in Aleppo where he had to leave school early to work with his father. After war broke out in Syria, he came to Armenia with his two sons who have developmental disabilities. His dream is to open a workshop where he can mentor his sons as his dad mentored him. But navigating the economic realities in Yerevan is not so easy.',
        },
        {
          videoName: 'Video of Jirair Halvajian',
          url: 'https://www.youtube.com/embed/qPsMpTGplUE',
          script: track,
          name: 'Jirair Halvajian',
          age: 56,
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=1zq50RsHd8x8vgtvLzub-8ngnAiMLbYv_',
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Marash',
          gender: 'Male',
          date: '8/10/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Jirair Halvajian was born and raised in Aleppo, Syria and always felt connected to the country of Armenia. He moved there just before the war to pursue business opportunities bringing Syrian food to Yerevan. He was then stuck between a difficult economic situation in his new home of Armenia, and the start of a devastating war in his old home of Aleppo.',
        },
        {
          videoName: 'Video of Mayda Hindoyan',
          url: 'https://www.youtube.com/embed/H_hHCWlHb4k',
          script: track,
          name: 'Mayda Hindoyan',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=1TdKzWmltX3cO4PP-gLrvnrv_upwu_9kl',
          age: 66,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Ainteb',
          gender: 'Female',
          date: '7/26/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Mayda Hindoyan grew up in Aleppo, the same city where she also raised her children to have strong connections to both their Syrian and Armenian identities. After the war upended her daughter’s education, the family relocated to Lebanon, but life was still hard for Mayda. After a year, she and her daughters moved to Armenia, where she feels comfort again.',
        },
        {
          videoName: 'Video of Vicky Masrie',
          url: 'https://www.youtube.com/embed/H_hHCWlHb4k',
          script: track,
          name: 'Vicky Masrie',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=1TdKzWmltX3cO4PP-gLrvnrv_upwu_9kl',
          age: 25,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Ainteb',
          gender: 'Female',
          date: '7/26/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Vicky Masrie was born in Aleppo where she graduated from Armenian schools before attending the University of Aleppo. After an explosion on campus, she left to Lebanon, leaving behind her life, education, and many Armenian and non-Armenian friends. Now in Armenia, she has had to restart her education while also working, but has found a new home and community.',
        },
        {
          videoName: 'Video of Lusin Mkhlmeljian',
          url: 'https://www.youtube.com/embed/UYqHImOaNno',
          script: track,
          name: 'Lusin Mkhlmeljian',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=14wMjWle-Y2vlqlk8WQpi8Afels2OO8xH',
          age: 51,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Ainteb',
          gender: 'Male',
          date: '8/18/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Lusin Mkhmeljian was born and raised in Aleppo and started her family there. When the war started, she took her two children to safety in Armenia while her husband stayed in Syria to join later. She started a restaurant out of necessity to provide for her children despite having no experience in the field. Now, her family runs two very successful Syrian-Armenian restaurants in Yerevan.',
        },
        {
          videoName: 'Video of Sosi Ohan',
          url: 'https://www.youtube.com/embed/-SOp0lCwR2c',
          script: track,
          name: 'Sosi Ohan',
          age: 57,
          gender: 'Female',
          birthplace: 'Qamishli, Syria',
          ancestralCity: 'Sassoun',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=1GmFExCuAHPyHt4xni1drpaJLAs1iSqHe',
          date: '8/9/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Sosi Ohan is a proud Armenian from Qamishli, Syria who remembers the stories of her ancestors who fled there after the Genocide. She raised her children in Qamishli, sending them to Armenian school, community activities, and church. But when the war reached her beloved hometown, she had to relocate to Armenia to start life again.',
        },
        {
          videoName: 'Video of Salpi Proudian',
          url: 'https://www.youtube.com/embed/LxfUNmWY-Ts',
          script: track,
          name: 'Salpi Proudian',
          age: 55,
          birthplace: 'Aleppo, Syria',
          ancestralCity: 'Ainteb',
          cityOfResidence: 'Yerevan, Armenia',
          englishPDF:
            'https://drive.google.com/open?id=1jsRz4SR_gyO5qfVrlz3knhS_keBZKiNc',
          gender: 'Female',
          date: '8/10/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
          blurb:
            'Salpi Proudian was born and raised in Aleppo but later spent several years working at the Armenian church in Der Zor, Syria. She returned to Aleppo where she raised her son on her own. One day there was an attack near his school and she had to walk there by herself to keep him safe. Now in Armenia, she dreams of a good future for her and her son.',
        },
      ],
    };
  }

  toggleModal = vidObj => {
    this.setState({
      isOpen: !this.state.isOpen,
      selectedVideo: vidObj,
    });
  };

  // Search and Filter Functions
  searchString = (s, v) => {
    const characters = v.split('');
    const search = s.split('');

    for (let i = 0; i < characters.length; i += 1) {
      if (characters[i] === search[0]) {
        let l = 0;
        let total = 0;
        while (l < search.length) {
          if (
            typeof characters[i + l] === 'string' &&
            characters[i + l] === search[l]
          ) {
            total += 1;
          }
          l += 1;
        }
        if (l === total) {
          return true;
        }
      }
    }
    return false; // arrow function asks that something be returned.
  };

  searchProfiles = e => {
    let found = 0;
    if (e.target.value === '') {
      this.setState({ selectedVideos: this.state.VideoList });
      return null;
    } else if (e.key === 'Enter') {
      const hits = [];
      for (let i = 0; i < this.state.VideoList.length; i += 1) {
        found = 0;
        const v = Object.values(this.state.VideoList[i]);
        for (let j = 0; j < v.length; j += 1) {
          if (typeof v[j] === 'string') {
            if (
              this.searchString(
                e.target.value.toLowerCase(),
                v[j].toLowerCase(),
              )
            ) {
              found += 1;
            }
          }
        }
        if (found > 0) {
          hits.push(this.state.VideoList[i]);
        }
      }
      this.setState({ selectedVideos: hits });
    }
    return null;
  };

  createRows = () => {
    const videos =
      this.state.selectedVideos === null
        ? this.state.VideoList
        : this.state.selectedVideos;

    return videos.map((vidObj, index) => {
      const val = index + 1;
      return (
        <VideoTitle
          key={val}
          onClick={() => {
            this.toggleModal(vidObj, index);
          }}
        >
          <div>Testimony of:</div>
          <div>
            <b>{vidObj.name}</b>
          </div>
          <HoverText>{vidObj.blurb}</HoverText>
        </VideoTitle>
      );
    });
  };

  render() {
    return (
      <div>
        {/* <div>
          <Background />
        </div> */}
        <div>
          <Modal
            show={this.state.isOpen}
            onClose={this.toggleModal}
            video={this.state.selectedVideo}
          />
        </div>
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
          <Header>Video Archives</Header>
          <Filter>
            <SearchContainer>
              Search:
              <Search id="searchField" onKeyUp={this.searchProfiles} />
            </SearchContainer>
          </Filter>
          <ListWrapper>
            <ul style={ulHelper}> {this.createRows()} </ul>
          </ListWrapper>
        </div>
      </div>
    );
  }
}
