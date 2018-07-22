import React from 'react';
import PropTypes from 'prop-types';
import track from 'file-loader!../../assets/test.vtt';
import video from 'file-loader!../../assets/Abdullah_Haddad_Full_Interview.mov';
// import ReactPlayer from 'react-player';
// maybe something about video vs iframe from youtube, consider download video option

import BigCircleProfile from './BigCircleProfile';
import ModalWrapper from './ModalWrapper';
import VideoWrapper from './VideoWrapper';
import ProfileContainer from './ProfileContainer';
import TextContainer from './TextContainer';

import image from '../../images/exampleSquare.jpg';

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // this was used for testing possible internet housing for videos
      video:
        'https://drive.google.com/file/d/1BcuhjPVvYuEr0s_KFvtfGGPse4kjErSv/view',
    };
  }
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <ModalWrapper>
          <ProfileContainer>
            <BigCircleProfile src={image} onClick={this.props.onClose} />
            <TextContainer />
            <VideoWrapper>
              {/* eslint-disable */}
              <video
                src={video}
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
                  src={track}
                  srcLang="en"
                  default
                />
              </video>
            </VideoWrapper>
          </ProfileContainer>
        </ModalWrapper>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default Modal;
