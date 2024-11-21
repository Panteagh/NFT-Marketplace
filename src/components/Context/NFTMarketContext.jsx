import React, { createContext, useContext } from "react";

export const NftMarketPlaceContext = createContext({});

export const useNftMarketPlaceContext = () => {
  return useContext(NftMarketPlaceContext);
};

function NFTMarketContext({ children }) {

  return (
    <NFTMarketContext.Provider 
    value={{
      
    }}>
      {children}
      
      </NFTMarketContext.Provider>
  );
}

export default NFTMarketContext;
