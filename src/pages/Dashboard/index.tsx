import React, { useState, useEffect, FormEvent } from 'react';

import Hightlight from '../../components/Highlight';
import Offer from '../../components/Offer';
import Slider from '../../components/Slider';
import headlineImage from '../../assets/headline1.png';
import highlight from '../../assets/highlight.jpg';
import estacao from '../../assets/estacao.jpg';
import blackBox from '../../assets/black-box.jpg';
import { usePreference } from '../../hooks/preference';
import { useShowHeader } from '../../hooks/showHeader';

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
  const { items, preferences } = usePreference();
  const { showHeader } = useShowHeader();

  useEffect(() => {
    showHeader(true);
    const filterItems = items.filter((item) =>
      item.categories.includes('reality'),
    );

    // const found = arr1.some(r=> arr2.includes(r));

    console.log('filter', filterItems, items);
    filterItems && setFiltered([...filterItems]);
  }, [preferences]);

  return (
    <>
      <Hightlight title="" headlineImg={headlineImage} highlightImg={highlight}>
        Uma médica estuda mistérios do cérebro enquanto luta contra o próprio
        transtorno
      </Hightlight>
      <Offer>
        <Slider items={filtered} />
      </Offer>
    </>
  );
};

export default Dashboard;
