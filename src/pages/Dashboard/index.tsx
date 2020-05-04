import React, { useState, useEffect, FormEvent } from 'react';

import Hightlight from '../../components/Highlight';
import Offer from '../../components/Offer';
import Slider from '../../components/Slider';

const Dashboard: React.FC = () => {
  return (
    <>
      <Hightlight />
      <Offer>
        <Slider />
      </Offer>
    </>
  );
};

export default Dashboard;
