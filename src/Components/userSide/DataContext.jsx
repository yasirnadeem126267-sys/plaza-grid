import React, { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState({
    cartItems: [],
    quantities: [],
    increaseQty: () => {},
    decreaseQty: () => {},
  });

  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
