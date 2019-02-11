import styled from 'styled-components';

const VideoTitle = styled.li`
  position: relative;
  list-style-type: none;
  height: 300px;
  width: 300px;
  float: left;
  font-size: 35px;
  margin: 20px;
  padding-top: 80px;
  text-align: center;
  border: 1px solid black;
  border-radius: 4px;
  padding-left: 10px;
  z-index: 3;
  transition: all 0.25s;
  &:hover {
    background-color: #8c0000;
    color: white;
  }
`;

export default VideoTitle;
