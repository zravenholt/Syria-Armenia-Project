/* eslint-disable no-use-before-define */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Header from './Header';
import Link from './Link';
import Background from './background';
import Tile from './Tile';
import TileRow from './TileRow';
import CircleProfile from './CircleProfile';
import Modal from './Modal';
import LinkContainer from './LinkContainer';
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
        {
          name: 'AAA',
          img: image,
        },
        {
          name: 'BBB',
          img: img2,
        },
        {
          name: 'CCC',
          img: image,
        },
        {
          name: 'Olivia Wilde',
          img: img2,
        },
        {
          name: 'DDD',
          img: image,
        },
        {
          name: 'EEE',
          img: img2,
        },
        {
          name: 'FFF',
          img: image,
        },
        {
          name: 'GGG',
          img: img2,
        },
        {
          name: 'Chris Pine',
          img: image,
        },
        {
          name: 'Olivia Wilde',
          img: img2,
        },
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

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  createTiles = total => {
    const tiles = [];
    for (let i = 0; i < 4; i += 1) {
      if (this.state.people[total + i]) {
        tiles.push(
          <Tile onClick={this.toggleModal}>
            <CircleProfile src={this.state.people[total + i].img}>
              {/* <ProfileImage src={img} alt="picture here" /> */}
            </CircleProfile>
            {this.state.people[total + i].name}
          </Tile>,
        );
      }
    }
    return (
      <div>
        <TileRow>{tiles}</TileRow>
      </div>
    );
  };

  createRows = () => {
    const rows = [];
    let total = 0;
    while (total < this.state.people.length) {
      rows.push(this.createTiles(total));
      total += 4;
    }
    return <div>{rows}</div>;
  };

  // create row with 4 tiles
  //

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
          <LinkContainer>
            <Link href="/archives" to="/archives">
              Video Archives
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
          {this.createRows()}
        </div>
      </div>
    );
  }
}
