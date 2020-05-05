import React, { useState, useRef } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import AppProvider from './hooks';
import { useShowHeader } from './hooks/showHeader';

const App: React.FC = () => {
  const { headerIsShow } = useShowHeader();
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          {headerIsShow && <Header />}

          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
