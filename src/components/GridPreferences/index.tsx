import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Grid3x4, GridItem, GridContent, GridContentHover } from './styles';

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
            <GridContent>{name}</GridContent>
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
