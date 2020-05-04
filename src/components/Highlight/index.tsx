import React from 'react';
import highlight from '../../assets/highlight.jpg';
import headlineImage from '../../assets/headline1.png';

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

const Highlight: React.FC = () => {
  return (
    <Container>
      <HilightBackground>
        <img src={highlight} alt="BlackBox" />
      </HilightBackground>
      <HighlightContent>
        <Headline>
          <HeadlinePic>
            <source
              srcSet="https://s2.glbimg.com/fM5Zspxz7b_BYxBTqxmCDSmaCDk=/fit-in/0x364/filters:fill(transparent)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/I/4/CQglGPSJSG6kyVEavOJw/2020-851-black-box-logo-destaque.png"
              media="(min-width: 768px)"
            />
            <HeadlineImg
              src={headlineImage}
              role="presentation"
              alt="Black Box"
            />
          </HeadlinePic>
        </Headline>
        <Description>
          <p>
            Uma médica estuda mistérios do cérebro enquanto luta contra o
            próprio transtorno
          </p>
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
