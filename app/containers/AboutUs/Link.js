import styled from 'styled-components';

const Link = styled.a`
  position: relative;
  width: 25%;
  margin-top: 10px;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  z-index: 2;
  &:hover {
    color: #474747;
  }
`;

export default Link;
