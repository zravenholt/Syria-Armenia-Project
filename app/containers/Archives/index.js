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
import video from 'file-loader!../../assets/Abdullah_Haddad_Full_Interview.mov';
import track from 'file-loader!../../assets/test.vtt';

import messages from './messages';
import Link from './Link';
import Header from './Header';
import ListWrapper from './ListWrapper';
import VideoTitle from './VideoTitle';
import Modal from './Modal';
import Background from './Background';
import LinkContainer from './LinkContainer';

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
          url: video,
          script: track,
          name: 'Angel Ajemian',
          date: '7/26/2017',
          location: 'Yerevan, Armenia',
          interviewer: 'Ani Schug',
          translator: 'Hagop Kazanjian',
        },
        {
          videoName: 'example2',
          url: video,
          script: track,
        },
        {
          videoName: 'example3',
          url: video,
          script: track,
        },
        {
          videoName: 'example4',
          url: video,
          script: track,
        },
        {
          videoName: 'example5',
          url: video,
          script: track,
        },
        {
          videoName: 'example6',
          url: video,
          script: track,
        },
        {
          videoName: 'example7',
          url: video,
          script: track,
        },
        {
          videoName: 'example8',
          url: video,
          script: track,
        },
        {
          videoName: 'example9',
          url: video,
          script: track,
        },
        {
          videoName: 'example10',
          url: video,
          script: track,
        },
        {
          videoName: 'example11',
          url: video,
          script: track,
        },
        {
          videoName: 'example12',
          url: video,
          script: track,
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
        <div>
          <Background />
        </div>
        <div>
          <Modal
            show={this.state.isOpen}
            onClose={this.toggleModal}
            video={this.state.selectedVideo}
          />
        </div>
        <div>
          <LinkContainer>
            <Link href="/people" to="/people">
              Refugees
            </Link>
            <Link href="/" to="/">
              Home
            </Link>
            <Link href="/about" to="/about">
              About Us
            </Link>
          </LinkContainer>
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
          <ListWrapper>
            <ul>
              {this.state.VideoList.map((vidObj, index) => {
                const val = index + 1;
                return (
                  <VideoTitle
                    key={val}
                    onClick={() => {
                      this.toggleModal(vidObj, index);
                    }}
                  >
                    {vidObj.name} - {vidObj.location} - {vidObj.date}
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
