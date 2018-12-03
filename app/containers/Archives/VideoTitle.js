import styled from 'styled-components';

const VideoTitle = styled.li`
  list-style-type: none;
  height: 100%;
  font-size: 35px;
  margin-top: 20px;
  background-color: #f3f3f3;
  border-radius: 5px;
  padding-left: 10px;
  z-index: 3;
  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default VideoTitle;
