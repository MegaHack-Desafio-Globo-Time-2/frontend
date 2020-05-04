import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Figure,
  Placeholder,
  Wrapper,
  ThumbWrapper,
  Thumb,
} from './styles';

const Slider: React.FC = () => {
  return (
    <Container>
      <Figure>
        <Placeholder />
        <Wrapper>
          <Link to="details">
            <ThumbWrapper>
              <Thumb />
            </ThumbWrapper>
          </Link>
        </Wrapper>
      </Figure>
    </Container>
  );
};

export default Slider;
