import styled from 'styled-components';

const Gif = styled.img`
  position: absolute;
  width: 25%;
  margin-top: 10px;
  left: 0px;
  top: -170px;
  color: #8c0000;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: serif;
  z-index: 2;
  &:hover {
    color: white;
  }
`;

export default Gif;
