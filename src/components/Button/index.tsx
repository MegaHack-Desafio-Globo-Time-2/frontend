import React, { ButtonHTMLAttributes } from 'react';
import { FaPlay } from 'react-icons/fa';
import { LinkContainer, Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stateType: 'subscribe' | 'info' | 'watch';
  to: string;
  hasIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  stateType,
  hasIcon = true,
}) => {
  return (
    <LinkContainer to={to}>
      <Container stateType={stateType}>
        {stateType === 'watch' && hasIcon && <FaPlay size={16} color="#333" />}
        {children}
      </Container>
    </LinkContainer>
  );
};

export default Button;
