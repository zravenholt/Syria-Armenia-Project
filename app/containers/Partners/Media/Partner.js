import styled from 'styled-components';

const Partner = styled.a`
  position: relative;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 50px;
  z-index: 3;
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  height: 400px;
  text-decoration: none;
  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default Partner;
