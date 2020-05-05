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
  id: string;
  highlight: any;
  desc: string;
}

interface SliderProps {
  data: Item;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <Link
      style={{ width: '200px', marginRight: '20px' }}
      key={data.title}
      to={`/content/${data.id}`}
    >
      <Container src={data.src} />
    </Link>
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
