import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import SmallName from './SmallName';
import Location from './Location';
import SmallLocation from './SmallLocation';
import TextWrapper from './TextWrapper';
import Bio from './Bio';

class TextContainer extends React.PureComponent {
  render() {
    if (!this.props.show) {
      console.log('name triggered');
    }

    return (
      <div>
        <TextWrapper>
          <Name>{this.props.person.name}</Name>
          <SmallName>{this.props.person.armenianName}</SmallName>
          <SmallName>{this.props.person.arabicName}</SmallName>
          <Location>Birthplace: {this.props.person.birthplace}</Location>
          <SmallLocation>
            Ծննդավայր {this.props.person.armenianBirthplace}
          </SmallLocation>
          <SmallLocation>
            مكان الولادة {this.props.person.arabicBirthplace}
          </SmallLocation>
          <Location>Ancestral City: {this.props.person.ancestralCity}</Location>
          <SmallLocation>
            Ծննդավայր {this.props.person.armenianAncestralCity}
          </SmallLocation>
          <SmallLocation>
            مكان الولادة {this.props.person.arabicAncestralCity}
          </SmallLocation>
          <Location>
            City of Residence: {this.props.person.cityOfResidence}
          </Location>
          <SmallLocation>
            Բնակավայր {this.props.person.armenianCityOfResidence}
          </SmallLocation>
          <SmallLocation>
            مدينة الاقامة {this.props.person.arabicCityOfResidence}
          </SmallLocation>
          <Location>Route: {this.props.person.route}</Location>
          <SmallLocation>
            Ճամբայ {this.props.person.armenianRoute}
          </SmallLocation>
          <SmallLocation>الطريق {this.props.person.arabicRoute}</SmallLocation>
          <Location>Age: {this.props.person.age}</Location>
          <SmallLocation>Տարիք {this.props.person.age}</SmallLocation>
          <SmallLocation>عمر {this.props.person.age}</SmallLocation>
          <Bio>{this.props.person.quote}</Bio>
        </TextWrapper>
      </div>
    );
  }
}
TextContainer.propTypes = {
  show: PropTypes.bool,
  person: PropTypes.object,
};

export default TextContainer;
