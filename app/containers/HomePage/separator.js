import styled from 'styled-components';

const Separator = styled.div`
  position: relative;
  display: block;
  margin: auto;
  background: -webkit-linear-gradient(177deg, transparent 0%, transparent, 50%, white 50%, black 100%);
  background: -o-linear-gradient(177deg, transparent 0%, transparent, 50%, white 50%, white 100%);
  background: -moz-linear-gradient(177deg, transparent 0%, transparent, 50%, white 50%, white 100%);
  background: linear-gradient(177deg, transparent 0%, transparent, 50%, white 50%, white 100%);
  width: 100%;
  height: 100px;
  padding-top: 100px;
  color: #303030;
  text-align: center;
  font-size: 60px;
  font-family: serif;
  text-shadow: 5px 5px 15px rgba(150, 150, 150, 1);
  z-index: 1;
`;

export default Separator;
