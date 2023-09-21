import styled from 'styled-components';

export const StyledList = styled.ul`

display: flex;
gap: 20px;
  list-style: none;
`


export const StyledBtn = styled.button`
  border-radius: 10px;
  border: none;

  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 14px;

  box-shadow: 2px 1px 2px 1px gray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  `
;