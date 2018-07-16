/* eslint-disable no-use-before-define */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Header from './Header';
import Link from './Link';
import Background from './background';
import Tile from './Tile';
import LeftTile from './LeftTile';
import RightTile from './RightTile';
import TileRow from './TileRow';
import CircleProfile from './CircleProfile';
import Modal from './Modal';
// import ProfileImage from './ProfileImage';

import image from '../../images/exampleSquare.jpg';
import img2 from '../../images/exampleSquare2.jpg';

export default class Refugees extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Chris Pine',
          img: image,
        },
        {
          name: 'Olivia Wilde',
          img: img2,
        },
      ],
      isOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Background />
        </div>
        <div>
          <Modal show={this.state.isOpen} onClose={this.toggleModal} />
        </div>
        <div>
          <Link href="/archives" to="/archives">
            Video Archives
          </Link>
          <Link href="/" to="/">
            Home
          </Link>
          <Link href="/about" to="/about">
            About Us
          </Link>
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
          <TileRow>
            <LeftTile onClick={this.toggleModal}>
              <CircleProfile src={this.state.people[0].img}>
                {/* <ProfileImage src={img} alt="picture here" /> */}
              </CircleProfile>
              {this.state.people[0].name}
            </LeftTile>
            <Tile>
              <CircleProfile src={this.state.people[1].img}>
                {/* <ProfileImage src={img} alt="picture here" /> */}
              </CircleProfile>
              {this.state.people[1].name}
            </Tile>
            <Tile>
              <CircleProfile src={this.state.people[0].img}>
                {/* <ProfileImage src={img} alt="picture here" /> */}
              </CircleProfile>
              <FormattedMessage {...messages.one} />
            </Tile>
            <RightTile>
              <CircleProfile src={this.state.people[1].img}>
                {/* <ProfileImage src={img} alt="picture here" /> */}
              </CircleProfile>
              <FormattedMessage {...messages.two} />
            </RightTile>
          </TileRow>
          <LeftTile>
            <CircleProfile src={this.state.people[0].img}>
              {/* <ProfileImage src={img} alt="picture here" /> */}
            </CircleProfile>
            <FormattedMessage {...messages.one} />
          </LeftTile>
          <Tile>
            <CircleProfile src={this.state.people[1].img}>
              {/* <ProfileImage src={img} alt="picture here" /> */}
            </CircleProfile>
            <FormattedMessage {...messages.two} />
          </Tile>
          <Tile>
            <CircleProfile src={this.state.people[0].img}>
              {/* <ProfileImage src={img} alt="picture here" /> */}
            </CircleProfile>
            <FormattedMessage {...messages.one} />
          </Tile>
          <RightTile>
            <CircleProfile src={this.state.people[1].img}>
              {/* <ProfileImage src={img} alt="picture here" /> */}
            </CircleProfile>
            <FormattedMessage {...messages.two} />
          </RightTile>
        </div>
      </div>
    );
  }
}
