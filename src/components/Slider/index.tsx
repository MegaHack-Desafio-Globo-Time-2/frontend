import React, { useState } from 'react';
import { Container, Header, Track, Title } from './styles';
import SliderItem from './SliderItem';

const Slider: React.FC = () => {
  const [items, setItems] = useState([]);
  return (
    <Container>
      <Header>
        <Title>Novidades</Title>
      </Header>
      <Track>
        {items.map((item) => (
          <SliderItem />
        ))}
      </Track>
    </Container>
  );
};

export default Slider;
