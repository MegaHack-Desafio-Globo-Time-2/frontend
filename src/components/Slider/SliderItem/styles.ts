import styled from 'styled-components';

export const Container = styled.img`
  width: 100%;
  /* margin: 3%; */

  & + img {
    margin-left: 2%;
  }

  &:hover {
    /* transform: scale(1.1); */
    opacity: 0.7;
  }
`;
