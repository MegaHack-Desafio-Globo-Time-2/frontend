import React, { useState, useRef } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
