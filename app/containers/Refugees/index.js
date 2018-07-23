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

  createTiles = () => {
    const tiles = [];
    for (let i = 0; i < 4; i += 1) {
      tiles.push(
        <Tile onClick={this.toggleModal}>
          <CircleProfile src={this.state.people[i].img}>
            {/* <ProfileImage src={img} alt="picture here" /> */}
          </CircleProfile>
          {this.state.people[i].name}
        </Tile>,
      );
    }
    return (
      <div>
        <TileRow>{tiles}</TileRow>
      </div>
    );
  };

  // createRows = () => {
  //   const persons = this.state.people;
  //   const toggleFunc = this.toggle;
  //   let person = 0;
  //   function createTiles() {
  //     const tiles = [];
  //     for (let i = 0; i < 4; i += 1) {
  //       if (persons[person + i]) {
  //         tiles.push(
  //           <Tile onClick={toggleFunc}>
  //             <CircleProfile src={persons[person + i].img}>
  //               {/* <ProfileImage src={img} alt="picture here" /> */}
  //             </CircleProfile>
  //             {this.state.people[i].name}
  //           </Tile>,
  //         );
  //       }
  //     }
  //     person += 4;
  //     return (
  //       <div>
  //         <TileRow>{tiles}</TileRow>
  //       </div>
  //     );
  //   }
  //   const rows = [];
  //   while (person <= this.state.people.length) {
  //     rows.push(createTiles());
  //   }
  //   return <div>{rows}</div>;
  // };

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
          {this.createTiles()}
          <TileRow>
            <Tile onClick={this.toggleModal}>
              <CircleProfile src={this.state.people[0].img}>
                {/* <ProfileImage src={img} alt="picture here" /> */}
              </CircleProfile>
              {this.state.people[0].name}
            </Tile>
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
            <Tile>
              <CircleProfile src={this.state.people[1].img}>
                {/* <ProfileImage src={img} alt="picture here" /> */}
              </CircleProfile>
              <FormattedMessage {...messages.two} />
            </Tile>
          </TileRow>
          <TileRow>
            <Tile>
              <CircleProfile src={this.state.people[0].img}>
                {/* <ProfileImage src={img} alt="picture here" /> */}
              </CircleProfile>
              <FormattedMessage {...messages.one} />
            </Tile>
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
            <Tile>
              <CircleProfile src={this.state.people[1].img}>
                {/* <ProfileImage src={img} alt="picture here" /> */}
              </CircleProfile>
              <FormattedMessage {...messages.two} />
            </Tile>
          </TileRow>
        </div>
      </div>
    );
  }
}
