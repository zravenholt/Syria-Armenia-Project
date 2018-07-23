import styled from 'styled-components';

const TileRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 25px;
  height: 350px;
  width: 100%;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-family: serif;
  border-radius: 10px;
  z-index: 2;
  &:hover {
    color: #3d3d3d;
  }
`;

export default TileRow;
