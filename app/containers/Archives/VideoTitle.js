import styled from 'styled-components';

const VideoTitle = styled.li`
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
  &:hover {
    background-color: #8c0000;
    color: white;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default VideoTitle;
