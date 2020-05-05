import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import Slider from 'react-styled-carousel';
// import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Container, Header, Track, Title } from './styles';
import SliderItem from './SliderItem';
import TCItem from '../TCItem';

interface Item {
  title: string;
  link: string;
  src: any;
  type: string;
  id: string;
  highlight: any;
  desc: string;
}

interface CustomSliderProps {
  items: Item[];
  width?: string;
  hasTitles?: boolean;
  isTC?: boolean;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ items, isTC = false }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <Container>
      <Header>
        <Title>Novidades</Title>
        <FaChevronRight size={16} color="#fff" />
      </Header>
      <Track>
        {items.map((item) =>
          isTC ? (
            <SliderItem key={item.title} data={item} />
          ) : (
            <TCItem key={item.title} data={item} />
          ),
        )}
      </Track>
    </Container>
  );
};

export default CustomSlider;
