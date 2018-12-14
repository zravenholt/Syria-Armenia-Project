import styled from 'styled-components';

const Link = styled.a`
  position: relative;
  color: white;
  margin-top: 10px;
  padding-right: 50px;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: serif;
  z-index: 2;
  float: right;
  &:hover {
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 1);
  }
`;

export default Link;
