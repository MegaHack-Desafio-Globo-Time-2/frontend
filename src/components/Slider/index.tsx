import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import Slider from 'react-styled-carousel';
// import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Container, Header, Track, Title } from './styles';
import SliderItem from './SliderItem';
import estacao from '../../assets/estacao.jpg';
import blackBox from '../../assets/black-box.jpg';

interface Item {
  title: string;
  link: string;
  src: any;
}

const CustomSlider: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const [items, setItems] = useState([
    {
      title: 'Estação Temple',
      link: '',
      src: estacao,
    },
    {
      title: 'Black Box',
      link: '',
      src: blackBox,
    },
    {
      title: 'Estação Temple',
      link: '',
      src: estacao,
    },
    {
      title: 'Black Box',
      link: '',
      src: blackBox,
    },
    {
      title: 'Estação Temple',
      link: '',
      src: estacao,
    },
    {
      title: 'Black Box',
      link: '',
      src: blackBox,
    },
    {
      title: 'Estação Temple',
      link: '',
      src: estacao,
    },
    {
      title: 'Black Box',
      link: '',
      src: blackBox,
    },
  ]);

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
