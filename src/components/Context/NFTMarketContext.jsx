import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NftMarketPlaceContext = createContext({});

export const useNftMarketPlaceContext = () => {
  return useContext(NftMarketPlaceContext);
};

export function NFTMarketContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggelMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const [isFollow, setIsFollow] = useState(true);

  const CopyArtistLink = () => {
    let copyText = "0xc0E3G6VnB79C";
    if (window.navigator.clipboard) {
      window.navigator.clipboard.writeText(copyText);
      alert("copy link");
    } else {
      alert("Your browser does not support it");
    }
  };

  const followHandler = () => {
    setIsFollow(!isFollow);
    console.log(isFollow);
  };

  const handelScrolling = () =>{
    const location = useLocation()

    useEffect(()=>{
      window.scrollTo(0,0)
    } ,[location.pathname])

  }

  return (
    <NftMarketPlaceContext.Provider
      value={{
        CopyArtistLink,
        followHandler,
        isFollow,
        isOpen,
        toggelMenu,
        handelScrolling
      }}
    >
      {children}
    </NftMarketPlaceContext.Provider>
  );
}
