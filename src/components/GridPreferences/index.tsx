import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Grid3x4, GridItem, GridContent, GridContentHover } from './styles';

interface GridProps {
  contentList: Array<string>;
}

const GridPreferences: React.FC<GridProps> = ({ contentList }) => {
  return (
    <Grid3x4>
      {contentList.map((name) => {
        return (
          <GridItem key={name}>
            <GridContent>{name}</GridContent>
            <GridContentHover>
              <FaHeart size={30} color="#ccc" />
            </GridContentHover>
          </GridItem>
        );
      })}
    </Grid3x4>
  );
};

export default GridPreferences;
