import React from 'react';
import PropTypes from 'prop-types';

// import ReactPlayer from 'react-player';
// maybe something about video vs iframe from youtube, consider download video option
// name
// date
// location of interview
// Inverviewer
// Translator

import ModalWrapper from './ModalWrapper';
import ModalContainer from './ModalContainer';
import VideoContainer from './VideoContainer';
import LeftTextWrapper from './LeftTextWrapper';
import RightTextWrapper from './RightTextWrapper';
import Name from './Name';
import Blurb from './Blurb';
import Date from './Date';
import Location from './Location';
import Interviewer from './Interviewer';
import Translator from './Translator';
import CloseButton from './CloseButton';

class Modal extends React.PureComponent {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <ModalWrapper>
          <ModalContainer>
            <CloseButton onClick={this.props.onClose}>X</CloseButton>
            <Name>
              <b>{this.props.video.name}</b>
            </Name>
            <Blurb>
              <i>{this.props.video.blurb}</i>
            </Blurb>
            <LeftTextWrapper>
              <Location>
                <b>Age:</b> {this.props.video.age}
              </Location>
              <Location>
                <b>Gender:</b> {this.props.video.gender}
              </Location>
              <Location>
                <b>Hometown:</b> {this.props.video.birthplace}
              </Location>
              <Location>
                <b>Place of Residence:</b> {this.props.video.cityOfResidence}
              </Location>
              <Location>
                <b>Ancestral City:</b> {this.props.video.ancestralCity}
              </Location>
              <Location>
                <a href={this.props.video.englishPDF} target="_blank">
                  English PDF of transcript
                </a>
              </Location>
            </LeftTextWrapper>
            <RightTextWrapper>
              <Date>
                <b>Date:</b> {this.props.video.date}
              </Date>
              <Interviewer>
                <b>Interviewer:</b> {this.props.video.interviewer}
              </Interviewer>
              <Translator>
                <b>Translator:</b> {this.props.video.translator}
              </Translator>
              <VideoContainer
                src={this.props.video.url}
                allowFullScreen="true"
                controls
              />
            </RightTextWrapper>
          </ModalContainer>
        </ModalWrapper>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  video: PropTypes.object,
};

export default Modal;
