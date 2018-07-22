import React from 'react';
import PropTypes from 'prop-types';
// import ReactPlayer from 'react-player';

import BigCircleProfile from './BigCircleProfile';
import ModalWrapper from './ModalWrapper';
import ProfileContainer from './ProfileContainer';
import TextContainer from './TextContainer';
import VideoContainer from './VideoContainer';

import image from '../../images/exampleSquare.jpg';

class Modal extends React.PureComponent {
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
            <VideoContainer
              src="https://www.youtube.com/embed/xO8Cz-9qKTI"
              allowFullScreen="true"
            />
            {/* <ReactPlayer
              src="https://www.youtube.com/watch?v=oUFJJNQGwhk"
              playing="true"
            /> */}
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
