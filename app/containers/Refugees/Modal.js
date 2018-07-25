import React from 'react';
import PropTypes from 'prop-types';
// import track from 'file-loader!../../assets/test.vtt';
// import video from 'file-loader!../../assets/Abdullah_Haddad_Full_Interview.mov';
// import ReactPlayer from 'react-player';
// maybe something about video vs iframe from youtube, consider download video option

import BigCircleProfile from './BigCircleProfile';
import ModalWrapper from './ModalWrapper';
// import VideoWrapper from './VideoWrapper';
import VideoContainer from './VideoContainer';
import ProfileContainer from './ProfileContainer';
import TextContainer from './TextContainer';
import CloseButton from './CloseButton';

// import image from '../../images/exampleSquare.jpg';

class Modal extends React.PureComponent {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <ModalWrapper>
          <ProfileContainer>
            <CloseButton onClick={this.props.onClose}>X</CloseButton>
            <BigCircleProfile src={this.props.person.img} />
            <TextContainer person={this.props.person} />
            <VideoContainer
              src={
                this.props.person.shortVideoLink === ''
                  ? this.props.person.fullVideoLink
                  : this.props.person.shortVideoLink
              }
              allowFullScreen="true"
              controls
            />
            {/* <VideoWrapper> */}
            {/* eslint-disable */}
              {/* <video
                src={this.props.person.video}
                width="100%"
                display="block"
                margin="auto"
                margin-top="25px"
                height="auto"
                controls
              > */}
              {/* eslint-enable */}
            {/* <track
                  kind="subtitles"
                  label="English subtitles"
                  src={track}
                  srcLang="en"
                  default
                /> */}
            {/* </video>
            </VideoWrapper> */}
          </ProfileContainer>
        </ModalWrapper>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  person: PropTypes.object,
};

export default Modal;
