import styled from 'styled-components';

const CircleProfile = styled.img`
  display: block;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 200px;
  height: 200px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  border: 2px solid black;
  z-index: 2;
  &:hover {
    color: #3d3d3d;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default CircleProfile;
