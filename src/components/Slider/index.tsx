import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ItemsCarousel from 'react-items-carousel';
import { Container, Header, Track, Title } from './styles';
import SliderItem from './SliderItem';
import estacao from '../../assets/estacao.jpg';
import blackBox from '../../assets/black-box.jpg';

interface Item {
  title: string;
  link: string;
  src: any;
}

const Slider: React.FC = () => {
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
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={2}
          gutter={20}
          leftChevron={<button type="button">{'<'}</button>}
          rightChevron={<button type="button">{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {items.map((item) => (
            <SliderItem data={item} />
          ))}
        </ItemsCarousel>
      </Track>
    </Container>
  );
};

export default Slider;
