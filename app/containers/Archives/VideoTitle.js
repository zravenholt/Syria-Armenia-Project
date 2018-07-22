import styled from 'styled-components';

const VideoTitle = styled.li`
  list-style-type: none;
  height: 100%;
  font-size: 25px;
  margin-top: 10px;
  background-color: white;
  border-radius: 2px;
  padding-left: 10px;
  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default VideoTitle;
