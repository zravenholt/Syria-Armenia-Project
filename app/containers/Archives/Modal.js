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
import VideoWrapper from './VideoWrapper';
import TextWrapper from './TextWrapper';
import Name from './Name';
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
            <TextWrapper>
              <Name>Interview of {this.props.video.name}</Name>
              <Location>Location: {this.props.video.location}</Location>
              <Date>Date: {this.props.video.date}</Date>
              <Interviewer>
                Interviewer: {this.props.video.interviewer}
              </Interviewer>
              <Translator>Translator: {this.props.video.translator}</Translator>
            </TextWrapper>
            <VideoWrapper>
              {/* eslint-disable */}
              <video
                src={this.props.video.url}
                width="680px"
                display="block"
                margin="auto"
                margin-top="25px"
                height="auto"
                controls
              >
              {/* eslint-enable */}
                <track
                  kind="subtitles"
                  label="English subtitles"
                  src={this.props.video.script}
                  srcLang="en"
                  default
                />
              </video>
            </VideoWrapper>
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
