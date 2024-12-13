import React from "react";

function ArtistState({Volumevalue , NFTsSoldValue , FollowersValue}) {
  return (
    <div className="md:w-[420px] max-md:w-[290px] max-sm:w-[269px] flex justify-between items-center">
      <div>
        <h3 className="text-white font-mono font-bold text-2xl max-md:text-lg">{Volumevalue}</h3>
        <span className="text-white text-sm">Volume</span>
      </div>
      <div>
        <h3 className="text-white font-mono font-bold text-2xl max-md:text-lg">{NFTsSoldValue}</h3>
        <span className="text-white text-sm">NFTs Sold</span>
      </div>
      <div>
        <h3 className="text-white font-mono font-bold text-2xl max-md:text-lg">{FollowersValue}</h3>
        <span className="text-white text-sm">Followers</span>
      </div>
    </div>
  );
}

export default ArtistState;
