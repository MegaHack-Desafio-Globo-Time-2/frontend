import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  // Figure,
  // Placeholder,
  // Wrapper,
  // ThumbWrapper,
  // Thumb,
} from './styles';

interface Item {
  title: string;
  link: string;
  src: any;
}

interface SliderProps {
  data: Item;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <Container src={data.src} />
    //   <Figure>
    //     <Placeholder />
    //     <Wrapper>
    //       <Link to="details">
    //         <ThumbWrapper>
    //           <Thumb src={data.src} />
    //         </ThumbWrapper>
    //       </Link>
    //     </Wrapper>
    //   </Figure>
    // </Container>
  );
};

export default Slider;
