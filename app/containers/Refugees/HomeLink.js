import styled from 'styled-components';

const HomeLink = styled.a`
  position: absolute;
  color: white;
  margin-left: 20px;
  top: 0px;
  left: 0px;
  text-decoration: none;
  text-align: center;
  font-size: 40px;
  font-family: Ubuntu;
  z-index: 2;
  float: right;
  &:hover {
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
  }
`;

export default HomeLink;
