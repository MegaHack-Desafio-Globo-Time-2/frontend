import React from 'react';
import { Container, TabsList, TabItem } from './styles';

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsList>
        <TabItem>NOVIDADES</TabItem>
        <TabItem className="tudoConectado active">TUDO CONECTADO</TabItem>
      </TabsList>
    </Container>
  );
};

export default Tabs;
