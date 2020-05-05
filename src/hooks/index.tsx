import React from 'react';
import { PreferenceProvider } from './preference';
import { HeaderProvider } from './showHeader';

const AppProvider: React.FC = ({ children }) => (
  <PreferenceProvider>
    <HeaderProvider>{children}</HeaderProvider>
  </PreferenceProvider>
);

export default AppProvider;
