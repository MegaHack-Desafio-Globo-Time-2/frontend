import React, { useState, useEffect, FormEvent } from 'react';

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
} from 'react-instantsearch-dom';
import { useRouteMatch } from 'react-router-dom';
import Hightlight from '../../components/Highlight';
import Offer from '../../components/Offer';
import Slider from '../../components/Slider';
import headlineBbb from '../../assets/headline1.png';
import highlightBbb from '../../assets/highlight.jpg';
import Tabs from '../../components/Tabs';
import TCItem from '../../components/TCItem';
import { usePreference } from '../../hooks/preference';
import TempContentHighlight from './components/TempContentHighlight';

interface ContentParams {
  id: string;
}

const searchClient = algoliasearch(
  '4QY1VFRTEI',
  'cc270b4bdedef830c10fc96247f2dd50',
);

interface Item {
  title: string;
  link: string;
  src: any;
  type: string;
  categories: string[];
  id: string;
  highlight: any;
  desc: string;
}

const Dashboard: React.FC = () => {
  const [filtered, setFiltered] = useState<Item[]>([]);
  const { params } = useRouteMatch<ContentParams>();
  const { items } = usePreference();

  const content = items[Number(params.id)];

  // useEffect(() => {}, []);

  return (
    <>
      <Hightlight
        title={content.title}
        highlightImg={content.highlight}
        headlineImg={headlineBbb}
      >
        {content.desc}
      </Hightlight>

      <Offer>
        <Tabs />
        {/* <InstantSearch indexName="desafioglobo" searchClient={searchClient}>
          <RefinementList attribute="content" defaultRefinement={['bbb']} />
          <Configure search={{ query: 'bbb' }} />
          <SearchBox />
          <Hits />
        </InstantSearch> */}

        {/* <Slider items={} /> */}
      </Offer>
      <Offer>
        <Slider isTC items={items} />
      </Offer>
      <TempContentHighlight />
    </>
  );
};

export default Dashboard;
