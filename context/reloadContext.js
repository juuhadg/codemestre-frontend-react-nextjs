
import React, { createContext, useContext, useState } from 'react';

const ReloadContext = createContext();

export const ReloadProvider = ({ children }) => {
  const [reload, setReload] = useState(false);

  const triggerReload = () => {
    setReload(prevReload => !prevReload);
  };

  return (
    <ReloadContext.Provider value={{ reload, triggerReload }}>
      {children}
    </ReloadContext.Provider>
  );
};

export const useReload = () => {
  return useContext(ReloadContext);
};
