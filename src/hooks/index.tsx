import React from 'react';
import { PreferenceProvider } from './preference';

const AppProvider: React.FC = ({ children }) => (
  <PreferenceProvider>{children}</PreferenceProvider>
);

export default AppProvider;
