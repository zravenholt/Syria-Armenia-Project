/* eslint-disable no-use-before-define */

import React from 'react';
import { FormattedMessage } from 'react-intl';
// import video2 from 'file-loader!../../assets/Abdullah_Haddad_Full_Interview.mov';

import messages from './messages';
import Header from './Header';
import Link from './Link';
import HomeLink from './HomeLink';
import InnerLink from './InnerLink';
import Dropdown from './Dropdown';
import Search from './Input';
import SearchContainer from './SearchContainer';
import Tile from './Tile';
import TileRow from './TileRow';
import CircleProfile from './CircleProfile';
// import FilterItemsContainer from './FilterItemsContainer';
import Modal from './Modal';
import LinkContainer from './LinkContainer';
import Filter from './Filter';
// import FilterTitle from './FilterTitle';
// import FilterCategory from './FilterCategory';
// import FilterOption from './FilterOption';
// import ProfileImage from './ProfileImage';

import Profiles from './Profiles';

export default class Refugees extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: null,
      selectedPeople: null,
      people: Profiles,
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = data => {
    this.setState({
      selectedPerson: data,
      isOpen: !this.state.isOpen,
    });
  };

  createTiles = total => {
    const people =
      this.state.selectedPeople === null
        ? this.state.people
        : this.state.selectedPeople;
    const tiles = [];
    for (let i = 0; i < 4; i += 1) {
      if (people[total + i]) {
        tiles.push(
          <Tile
            onClick={() => {
              this.handleClick(people[total + i]);
            }}
          >
            <CircleProfile src={people[total + i].img}>
              {/* <ProfileImage src={img} alt="picture here" /> */}
            </CircleProfile>
            {people[total + i].name}
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
    const people =
      this.state.selectedPeople === null
        ? this.state.people
        : this.state.selectedPeople;
    const rows = [];
    let total = 0;
    while (total < people.length) {
      rows.push(this.createTiles(total));
      total += 4;
    }
    return <div>{rows}</div>;
  };

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
      this.setState({ selectedPeople: this.state.people });
      return null;
    } else if (e.key === 'Enter') {
      const hits = [];
      for (let i = 0; i < this.state.people.length; i += 1) {
        found = 0;
        const v = Object.values(this.state.people[i]);
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
          hits.push(this.state.people[i]);
        }
      }
      this.setState({ selectedPeople: hits });
    }
    return null;
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
            onClose={this.handleClick}
            person={this.state.selectedPerson}
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
          <Filter>
            <SearchContainer>
              Search:
              <Search id="searchField" onKeyUp={this.searchProfiles} />
            </SearchContainer>
          </Filter>
          {this.createRows()}
        </div>
      </div>
    );
  }
}
