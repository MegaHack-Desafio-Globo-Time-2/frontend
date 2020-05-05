import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { Container, BackgroundImg, Content, Header, Title } from './styles';

import Button from '../../../../components/Button';
import Offer from '../../../../components/Offer';

interface TempContentProps {
  bgColor: string;
  bgImg: any;
  actionButtonText: string;
  hasBlur?: boolean;
  hasMarginRight?: boolean;
}

const TempContentHighlight: React.FC<TempContentProps> = ({
  bgColor,
  bgImg,
  children,
  actionButtonText,
  hasBlur = true,
  hasMarginRight = false,
}) => {
  return (
    <Container bgColor={bgColor}>
      <Content>
        <Header>
          <Title>Eventos</Title>
          <FaChevronRight size={16} color="#fff" />
        </Header>
        {children}
        <Offer>
          <Button to="mais" stateType="watch" hasIcon={false}>
            {actionButtonText}
          </Button>
        </Offer>
      </Content>
      {bgImg && (
        <BackgroundImg hasBlur={hasBlur} hasMarginRight={hasMarginRight}>
          <img src={bgImg} alt="Evento" />
        </BackgroundImg>
      )}
    </Container>
  );
};

export default TempContentHighlight;
