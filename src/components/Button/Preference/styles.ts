import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { grayscale, lighten } from 'polished';

interface ButtonProps {
  stateType: 'subscribe' | 'info';
}

export const LinkContainer = styled(Link)`
  color: #fff;

  display: flex;

  justify-content: center;
  text-decoration: none;
  border-radius: 3px;

  & + a {
    margin-left: 15px;
  }
`;

export const Container = styled.button<ButtonProps>`
  padding: 10px 40px;

  font-family: 'Open Sans', sans-serif;
  border: 2px solid rgb(243, 29, 29);
  background-color: rgb(243, 29, 29);
  color: rgb(255, 255, 255);
  border-radius: 3px;

  font-weight: 500;
  border-radius: 3px;

  &:hover {
    background-color: hsla(0, 0%, 40%, 0.6);
    border-color: hsla(0, 0%, 40%, 0.6);
  }

  ${(props) =>
    props.stateType === 'info' &&
    css`
      margin-left: 15px;
      border-color: #888;
      background-color: transparent;
      color: white;

      &:hover {
        background: transparent;
        border-color: ${lighten(0.1, '#888')};
        color: ${lighten(0.1, '#888')};
      }
    `}
`;
