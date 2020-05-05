import React, { createContext, useCallback, useState, useContext } from 'react';

interface HeaderContextData {
  showHeader(show: boolean): Promise<void>;
  headerIsShow: boolean;
}

const HeaderContext = createContext<HeaderContextData>({} as HeaderContextData);

const HeaderProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(false);

  const showHeader = useCallback(async (show) => {
    setData(show);
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        headerIsShow: data,
        showHeader,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

function useShowHeader(): HeaderContextData {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('useAuth must be within an PreferenceProvider component');
  }

  return context;
}

export { HeaderProvider, useShowHeader };
