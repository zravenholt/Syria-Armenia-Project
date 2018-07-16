import styled from 'styled-components';

const RightTile = styled.div`
  position: relative;
  display: block-inline;
  float: left;
  background-color: white;
  margin-right: 4%;
  height: 350px;
  width: 300px;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: serif;
  border-radius: 10px;
  z-index: 2;
  &:hover {
    color: #3d3d3d;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default RightTile;
