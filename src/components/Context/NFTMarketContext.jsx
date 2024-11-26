import React, { createContext, useContext, useState } from "react";

export const NftMarketPlaceContext = createContext({});

export const useNftMarketPlaceContext = () => {
  return useContext(NftMarketPlaceContext);
};

export function NFTMarketContextProvider({ children }) {

  const [isFollow , setIsFollow] = useState(true)

  const CopyArtistLink = () =>{
    let copyText = "0xc0E3G6VnB79C"
    if(window.navigator.clipboard){
      window.navigator.clipboard.writeText(copyText)
      alert('copy link')
    } else {
      alert('Your browser does not support it')
    }
  }

  const followHandler = () => {
    setIsFollow (!isFollow)
    console.log(isFollow);
    
  }

  return (
    <NftMarketPlaceContext.Provider 
    value={{
      CopyArtistLink,
      followHandler,
      isFollow
    }}>
      {children}
      
      </NftMarketPlaceContext.Provider>
  );
}


