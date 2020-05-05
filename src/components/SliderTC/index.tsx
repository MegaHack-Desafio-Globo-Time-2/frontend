import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import Slider from 'react-styled-carousel';
// import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Container, Header, Track, Title } from './styles';
// import SliderItem from './SliderItem';
import TCItem from '../TCItem';

interface Item {
  title: string;
  src: any;
}

interface CustomSliderProps {
  items: Item[];
  width?: string;
  hasTitles?: boolean;
  isTC?: boolean;
  title?: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  title = '',
  items,
  isTC = false,
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <Container>
      <Header>
        <Title>{title || 'Novidades'}</Title>
        <FaChevronRight size={16} color="#fff" />
      </Header>
      <Track>
        {items.map((item) => (
          <TCItem key={item.title} data={item} />
        ))}
      </Track>
    </Container>
  );
};

export default CustomSlider;
