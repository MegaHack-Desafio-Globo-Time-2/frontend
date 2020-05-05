import React from 'react';
import highlight from '../../assets/highlight.jpg';

import {
  Container,
  HighlightContent,
  HilightBackground,
  Headline,
  HeadlinePic,
  HeadlineImg,
  Description,
  Actions,
} from './styles';
import Button from '../Button';

interface HighlightProps {
  headlineImg: any;
  highlightImg: any;
  title: string;
}

const Highlight: React.FC<HighlightProps> = ({
  children,
  highlightImg,
  headlineImg,
  title = '',
}) => {
  return (
    <Container>
      <HilightBackground>
        <img src={highlightImg} alt="BlackBox" />
      </HilightBackground>
      <HighlightContent>
        <Headline>
          {!title ? (
            <HeadlinePic>
              <source srcSet={headlineImg} media="(min-width: 768px)" />
              <HeadlineImg
                src={headlineImg}
                role="presentation"
                alt="Black Box"
              />
            </HeadlinePic>
          ) : (
            title
          )}
        </Headline>
        <Description>
          <p>{children}</p>
        </Description>
        <Actions>
          <Button to="experimente" stateType="subscribe">
            Experimente grátis
          </Button>
          <Button to="mais" stateType="info">
            Veja mais
          </Button>
        </Actions>
      </HighlightContent>
    </Container>
  );
};

export default Highlight;
