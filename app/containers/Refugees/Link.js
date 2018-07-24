import styled from 'styled-components';

const Link = styled.a`
  position: relative;
  width: 25%;
  margin-top: 10px;
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
