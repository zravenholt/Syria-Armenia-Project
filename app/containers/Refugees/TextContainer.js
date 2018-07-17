import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Location from './Location';
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
          <Name>Chris Pine</Name>
          <Name>Անճէլ Աճէմեան</Name>
          <Location>Birthplace: Los Angeles</Location>
          <Location>City of Residence: Hollywood</Location>
          <Location>Age: 55</Location>
          <Bio>
            Pine was born in Los Angeles. His father, Robert Pine, is an actor
            who co-starred on CHiPs as Sergeant Joseph Getraer, and his mother,
            Gwynne Gilford, is a former actress who became a practicing
            psychotherapist.[3] He has an older sister, Katie.[4] His maternal
            grandmother, Anne Gwynne (née Marguerite Gwynne Trice), was a
            Hollywood actress, and his maternal grandfather, Max M. Gilford
            (born Max Goldfarb), was an attorney who was elected president of
            the Hollywood Bar Association.[5] Pines maternal grandfather was
            from a Russian Jewish family.{' '}
          </Bio>
        </TextWrapper>
      </div>
    );
  }
}
TextContainer.propTypes = {
  show: PropTypes.bool,
};

export default TextContainer;
