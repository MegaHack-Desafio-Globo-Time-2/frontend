import styled from 'styled-components';

export const Grid3x4 = styled.div`
  max-width: 1000px;
  margin-top: 40px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

export const GridItem = styled.div`
  color: white;
  background-color: #3C3C3A;
  height: 110px;
  position: relative;
  &:hover {
    background-color: hsla(0, 0%, 40%, 0.6);
    border-color: hsla(0, 0%, 40%, 0.6);
  }
`;

export const GridContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GridContentHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
