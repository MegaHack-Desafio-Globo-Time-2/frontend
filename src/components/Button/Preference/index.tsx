import React, { ButtonHTMLAttributes } from 'react';
import { LinkContainer, Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stateType: 'subscribe' | 'info';
  onclick: Function;
}

const PreferenceButton: React.FC<ButtonProps> = ({
  children,
  onclick,
  stateType,
}) => {
  return (
    <Container stateType={stateType} onClick={() => onclick()}>
      {children}
    </Container>
  );
};

export default PreferenceButton;
