import styled from 'styled-components';

const InnerLink = styled.a`
  position: relative;
  color: white;
  padding-left: 5px;
  padding-right: 5px;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: serif;
  z-index: 2;
  display: block;
  &:hover {
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 1);
  }
`;

export default InnerLink;
