import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Grid3x4, GridItem, GridContent, GridContentHover } from './styles';

import atheletico from '../../assets/serieA/Athletico-PR.svg';
import atheleticoGo from '../../assets/serieA/atletico-go.svg';
import atheleticoMg from '../../assets/serieA/atletico-mg.svg';
import bahia from '../../assets/serieA/bahia.svg';
import botafogo from '../../assets/serieA/botafogo-svg.svg';
import bragantino from '../../assets/serieA/bragantino.svg';
import ceara from '../../assets/serieA/ceara.svg';
import corinthians from '../../assets/serieA/Corinthians.svg';
import coritiba from '../../assets/serieA/coritiba.svg';
import flamengo from '../../assets/serieA/Flamengo-2018.svg';
import fluminense from '../../assets/serieA/fluminense.svg';
import goias from '../../assets/serieA/Goias_SVG.svg';
import gremio from '../../assets/serieA/gremio.svg';
import internacional from '../../assets/serieA/internacional.svg';
import palmeiras from '../../assets/serieA/Palmeiras.svg';
import santos from '../../assets/serieA/santos.svg';
import saoPaulo from '../../assets/serieA/sao-paulo.svg';
import sport from '../../assets/serieA/sport.svg';
import vasco from '../../assets/serieA/vasco.svg';

const mapNameSvg: Record<string, string> = {
  'Athletico Paranaense': atheletico,
  'Athletico Goianiense': atheleticoGo,
  'Athletico Mineiro': atheleticoMg,
  Bahia: bahia,
  Botafogo: botafogo,
  Bragrantino: bragantino,
  Ceara: ceara,
  Corinthians: corinthians,
  Coritiba: coritiba,
  Flamengo: flamengo,
  Fluminense: fluminense,
  Goias: goias,
  Grêmio: gremio,
  Internacional: internacional,
  Palmeiras: palmeiras,
  Santos: santos,
  'São Paulo': saoPaulo,
  Sport: sport,
  Vasco: vasco,
};

interface GridProps {
  contentList: Array<string>;
  selectedItens: Array<string>;
  onItemSelected: Function;
}

const GridPreferences: React.FC<GridProps> = ({
  contentList,
  selectedItens,
  onItemSelected,
}) => {
  return (
    <Grid3x4>
      {contentList.map((name) => {
        return (
          <GridItem
            key={name}
            onClick={() => onItemSelected(name)}
            selected={selectedItens.includes(name)}
          >
            <GridContent>
              <img width="50" src={mapNameSvg[name]} alt={name} />
            </GridContent>
            <GridContentHover className="div-hover">
              <FaHeart size={30} color="white" />
            </GridContentHover>
          </GridItem>
        );
      })}
    </Grid3x4>
  );
};

export default GridPreferences;
