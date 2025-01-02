import React from "react";
import { BASE_URL } from "../services/api";

function NFTCard({
  style,
  NFTimg,
  Avatar,
  NFTname,
  Artistname,
  trandingNFTsImg,
  trandingNFTsAvatr,
}) {
  return (
    <div
      className={`${style} lg:w-[330px] lg:h-[469px] bg-[#3B3B3B] rounded-3xl hover:scale-95 duration-700 my-5 `}
    >
      <div className="lg:h-[295px]">
        {NFTimg ? (
          <img className="w-full" src={BASE_URL + NFTimg} loading="lazy" />
        ) : (
          <img className="w-full" src={trandingNFTsImg} loading="lazy" />
        )}
      </div>

      <div className="mx-7 mt-3 md:pb-3 max-md:pb-3">
        <h2 className="md:font-semibold text-white text-xl max-md:text-sm max-sm:text-lg font-sans">
          {NFTname}
        </h2>

        <div className="flex gap-4 max-md:gap-2 items-center">
        {NFTimg ? (
          <img
          className="w-6 h-6 rounded-s-full mt-2"
          src={BASE_URL + Avatar}
        />
        ) : (
          <img
          className="w-6 h-6 rounded-s-full mt-2"
          src={trandingNFTsAvatr}
        />
        )}
          
          <h3 className="text-white font-mono mt-2 max-md:text-sm ">
            {Artistname}
          </h3>
        </div>

        <div className="max-lg:mt-5 max-md:mb-3">
          <div className="flex justify-between items-center text-[#858584] max-md:text-xs">
            <span>Price</span>
            <span>Highest Bid</span>
          </div>

          <div className="flex justify-between items-center gap-1 text-white font-mono mt-2 max-md:text-xs">
            <h4>1.63 ETH</h4>
            <h4>0.33 wETH</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
