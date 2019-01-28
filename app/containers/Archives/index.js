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
import { FormattedMessage } from 'react-intl';
// import video from 'file-loader!../../assets/Abdullah_Haddad_Full_Interview.mov';
import track from 'file-loader!../../assets/test.vtt';

import messages from './messages';
import Link from './Link';
import HomeLink from './HomeLink';
import InnerLink from './InnerLink';
import Dropdown from './Dropdown';
import Header from './Header';
import ListWrapper from './ListWrapper';
import VideoTitle from './VideoTitle';
import Modal from './Modal';
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
      VideoList: [
        {
          videoName: 'Video of Angel Ajemian',
          url: 'https://www.youtube.com/embed/k-YK154hxO0',
          script: track,
          name: 'Angel Ajemian',
          date: '7/26/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Sosi Ohan',
          url: 'https://www.youtube.com/embed/-SOp0lCwR2c',
          script: track,
          name: 'Sosi Ohan',
          date: '8/9/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Salpi Proudian',
          url: 'https://www.youtube.com/embed/LxfUNmWY-Ts',
          script: track,
          name: 'Salpi Proudian',
          date: '8/10/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Jirair Halvajian',
          url: 'https://www.youtube.com/embed/qPsMpTGplUE',
          script: track,
          name: 'Jirair Halvajian',
          date: '8/10/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Sona Gildalian',
          url: 'https://www.youtube.com/embed/pM6_m6EA-E4',
          script: track,
          name: 'Sona Gildalian',
          date: '8/3/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Abdullah George Haddad',
          url: 'https://www.youtube.com/embed/N016Ka053tQ',
          script: track,
          name: 'Abdullah George Haddad',
          date: '7/25/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Linda Arakel',
          url: 'https://www.youtube.com/embed/OduWA8zCjec',
          script: track,
          name: 'Linda Arakel',
          date: '8/10/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Hagop Atikian',
          url: 'https://www.youtube.com/embed/OduWA8zCjec',
          script: track,
          name: 'Hagop Atikian',
          date: '8/3/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Takouhi Bedros',
          url: 'https://www.youtube.com/embed/sQkWmaDANto',
          script: track,
          name: 'Takouhi Bedros',
          date: '8/16/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Toros Ayranjian',
          url: 'https://www.youtube.com/embed/sQkWmaDANto',
          script: track,
          name: 'Toros Ayranjian',
          date: '8/16/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Vicky Masrie',
          url: 'https://www.youtube.com/embed/H_hHCWlHb4k',
          script: track,
          name: 'Vicky Masrie',
          date: '7/26/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Mayda Hindoyan',
          url: 'https://www.youtube.com/embed/H_hHCWlHb4k',
          script: track,
          name: 'Mayda Hindoyan',
          date: '7/26/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'Video of Lusin Mkhlmeljian',
          url: 'https://www.youtube.com/embed/UYqHImOaNno',
          script: track,
          name: 'Lusin Mkhlmeljian',
          date: '8/18/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
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
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
          <ListWrapper>
            <ul style={ulHelper}>
              {this.state.VideoList.map((vidObj, index) => {
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
                  </VideoTitle>
                );
              })}
            </ul>
          </ListWrapper>
        </div>
      </div>
    );
  }
}
