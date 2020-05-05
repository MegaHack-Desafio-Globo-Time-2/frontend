import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 64px;
  background-color: #000;
  /* width: 90%; */
  padding: 0 5%;
`;

export const TabsList = styled.ul`
  overflow: overlay;
  display: flex;
  list-style: none;
`;

export const TabItem = styled.li`
  padding: 24px 4px;
  font-weight: 600;
  color: #ccc;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;

  & + li {
    margin-left: 21px;
  }

  &.tudoConectado {
    color: rgb(243, 29, 29);
  }

  &.tudoConectado {
    border-bottom: 4px solid #333;
  }
`;
