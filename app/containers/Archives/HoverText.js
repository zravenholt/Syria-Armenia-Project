import styled from 'styled-components';
import VideoTitle from './VideoTitle';

const HoverText = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  height: 100%;
  background-color: #8c0000;
  color: white;
  text-decoration: none;
  text-align: left;
  font-size: 17px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  z-index: 2;
  border-radius: 5px;
  visibility: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  opacity: 0;
  transition: all 0.25s;
  ${VideoTitle}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export default HoverText;
