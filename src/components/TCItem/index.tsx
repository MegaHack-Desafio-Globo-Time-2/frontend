import React from 'react';

import { Container, ThumbTitle } from './styles';

import flay from '../../assets/music/flay.jpg';

interface SliderProps {
  data: any;
}

const TCItem: React.FC<SliderProps> = ({ data }) => {
  return (
    <Container>
      <img src={data.src} alt="Thumb" />
      <ThumbTitle>{data.title}</ThumbTitle>
    </Container>
  );
};

export default TCItem;
