import styled from 'styled-components';

const Link = styled.a`
  position: relative;
  display: block-inline;
  float: left;
  margin-top: 10px;
  margin-left: 19%;
  color: #6d6d6d;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: serif;
  z-index: 2;
  &:hover {
    color: #3d3d3d;
  }
`;

export default Link;
