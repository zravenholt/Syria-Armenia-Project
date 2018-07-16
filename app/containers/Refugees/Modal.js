import React from 'react';
import PropTypes from 'prop-types';
import CircleProfile from './CircleProfile';
import ModalWrapper from './ModalWrapper';

import image from '../../images/exampleSquare.jpg';

class Modal extends React.PureComponent {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background

    return (
      <div>
        <ModalWrapper onClick={this.props.onClose}>
          <CircleProfile src={image} />
          {this.props.children}
        </ModalWrapper>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
