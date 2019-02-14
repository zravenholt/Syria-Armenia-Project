import styled from 'styled-components';

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 70%;
  height: 90%;
  overflow: auto;
  margin: auto;
  margin-top: 2%;
  z-index: 3;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.75);
  -box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.75);
`;

export default ModalContainer;
