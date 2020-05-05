import React from 'react';

import { Container } from './styles';

interface Item {
  title: string;
  link: string;
  src: any;
  id: string;
  highlight: any;
  desc: string;
}

interface SliderProps {
  data: Item;
}

const TCItem: React.FC<SliderProps> = ({ data }) => {
  return (
    <Container>
      <div />
    </Container>
  );
};

export default TCItem;
