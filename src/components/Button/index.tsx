import React, { ButtonHTMLAttributes } from 'react';
import { LinkContainer, Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stateType: 'subscribe' | 'info';
  to: string;
}

const Button: React.FC<ButtonProps> = ({ children, to, stateType }) => {
  return (
    <LinkContainer to={to}>
      <Container stateType={stateType}>{children}</Container>
    </LinkContainer>
  );
};

export default Button;
