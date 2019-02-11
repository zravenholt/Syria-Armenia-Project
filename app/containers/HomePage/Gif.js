import styled from 'styled-components';

const Gif = styled.img`
  position: absolute;
  width: 344px;
  margin-top: 10px;
  left: 10px;
  top: -30px;
  color: #8c0000;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  z-index: 2;
  &:hover {
    color: white;
  }
`;

export default Gif;
