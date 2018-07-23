import styled from 'styled-components';
import img from '../../images/refugees3.jpg';

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  height: 100vh;
  background-image: url(${img});
  background-size: 100%;
  filter: blur(5px);
  z-index: 0;
`;

export default Background;
