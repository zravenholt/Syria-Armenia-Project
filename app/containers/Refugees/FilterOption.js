import styled from 'styled-components';

const FilterOption = styled.div`
  background-color: grey;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 70px;
  vertical-align: top;
  margin-top: 15px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  &:hover {
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 2px 6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default FilterOption;
