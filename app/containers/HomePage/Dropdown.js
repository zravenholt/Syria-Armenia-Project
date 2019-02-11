import styled from 'styled-components';
import Link from './Link';

const Dropdown = styled.a`
  position: absolute;
  top: 105%;
  left: -10%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  z-index: 2;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s;
  ${Link}:hover & {
    visibility: visible;
    opacity: 1;
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 1);
  }
`;

export default Dropdown;
