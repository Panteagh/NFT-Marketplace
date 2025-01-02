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
  };

  const handelScrolling = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  };

  const [isLoading , setIsLoading] = useState(false)


  const [inputValue, setInputValue] = useState();

  return (
    <NftMarketPlaceContext.Provider
      value={{
        CopyArtistLink,
        followHandler,
        isFollow,
        isOpen,
        toggelMenu,
        handelScrolling,
        inputValue,
        setIsLoading,
      }}
    >
      {children}
    </NftMarketPlaceContext.Provider>
  );
}
