import React from 'react';
import PropTypes from 'prop-types';

// import ReactPlayer from 'react-player';
// maybe something about video vs iframe from youtube, consider download video option

import ModalWrapper from './ModalWrapper';
import ModalContainer from './ModalContainer';
import VideoWrapper from './VideoWrapper';

class Modal extends React.PureComponent {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <ModalWrapper onClick={this.props.onClose}>
          <ModalContainer>
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
              {this.props.video.videoName}
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
