import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import Slider from 'react-styled-carousel';
// import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Container, Header, Track, Title } from './styles';
import SliderItem from './SliderItem';

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
}

const CustomSlider: React.FC<CustomSliderProps> = ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <Container>
      <Header>
        <Title>Novidades</Title>
        <FaChevronRight size={16} color="#fff" />
      </Header>
      <Track>
        {items.map((item) => (
          <SliderItem data={item} />
        ))}
      </Track>
    </Container>
  );
};

export default CustomSlider;
