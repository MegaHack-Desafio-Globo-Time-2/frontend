import styled, { css } from 'styled-components';

export const Grid3x4 = styled.div`
  max-width: 1000px;
  margin-top: 40px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

interface GridItemProps {
  selected: boolean;
}

export const GridItem = styled.div<GridItemProps>`
  color: white;
  background-color: #3c3c3a;
  height: 110px;
  position: relative;
  &:hover {
    background-color: #3c3c3a80;
    color: #ffffff80;
  }
  &:hover .div-hover {
    display: block;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: #f31d1d;
      &:hover {
        background: #f31d1d80;
      }
    `}
`;

export const GridContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GridContentHover = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
