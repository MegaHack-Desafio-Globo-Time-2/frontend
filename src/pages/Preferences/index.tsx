import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

import GridPreferences from '../../components/GridPreferences';

import {
  FullPage,
  Title,
  TitleHighlight,
  Description,
  DescriptionHighlight,
  CenterContainer,
} from './styles';

interface PreferenceContent {
  title: string;
  subtitle: string;
  subtitleHighlight: string;
  options: Array<string>;
}

const content: Array<PreferenceContent> = [
  {
    title: '1 Escolha seus |programas| favoritos',
    subtitle:
      'Escolha seus gêneros de filmes, séries e programas preferidos, assim podemos criar uma melhor recomendação.',
    subtitleHighlight: 'Clique nas categorias que você gosta!',
    options: [
      'Novelas',
      'Séries',
      'Cinema',
      'Infantil',
      'Humor',
      'Variedade',
      'Realities',
      'Música',
      'Documentários',
      'Jornalismo',
      'Esportes',
      'Programs Locais',
    ],
  },
  {
    title: '2 Escolha seus |gêneros musicais| favoritos',
    subtitle:
      'Escolha seus gêneros musicais preferidos, assim podemos criar uma melhor recomendação.',
    subtitleHighlight: 'Clique nas categorias que você gosta!',
    options: [
      'Lançamentos',
      'Mais tocadas',
      'Em ascenção',
      'Internacional',
      'Brasil',
      'Sertanejo',
      'Funk',
      'Samba',
      'Pagode',
      'MPB',
      'Eletrônica',
      'Bem estar',
    ],
  },
  {
    title: '3 Escolha seus |gêneros de podcasts| favoritos',
    subtitle:
      'Escolha seus gêneros de podcasts preferidos, assim podemos criar uma melhor recomendação.',
    subtitleHighlight: 'Clique nas categorias que você gosta!',
    options: [
      'Estilo de Vida',
      'Saúde',
      'Auto-ajuda',
      'Comédia',
      'Notícias',
      'Sociedade',
      'Cultura',
      'Esportes',
      'Negócios',
      'Linguagem',
      'Tecnologia',
      'Religião',
    ],
  },
];

const Preferences: React.FC = () => {
  const [prefIndex] = useState(1);
  console.log('PREF IST', prefIndex);

  const { options, title, subtitle, subtitleHighlight } = content[prefIndex];
  const [titleBegin, titleHightlight, titleEnd] = title.split('|');

  return (
    <FullPage>
      <CenterContainer>
        <Title>
          {prefIndex ? (
            <FaChevronLeft
              size={20}
              color="white"
              style={{ marginRight: '20px' }}
            />
          ) : (
            <></>
          )}
          {titleBegin} <TitleHighlight>{titleHightlight}</TitleHighlight>
          {titleEnd}
        </Title>
        <Description>
          {subtitle}
          <DescriptionHighlight>{subtitleHighlight}</DescriptionHighlight>
        </Description>
        <GridPreferences contentList={options} />
      </CenterContainer>
    </FullPage>
  );
};

export default Preferences;
