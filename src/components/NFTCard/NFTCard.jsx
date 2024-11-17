import React from "react";

function NFTCard({style , NFTimg , avatr}) {
  return (
    <div className={`${style} lg:w-[330px] lg:h-[469px] bg-[#3B3B3B] rounded-3xl hover:scale-95 duration-700`}> 
      <div className="lg:h-[295px]">
        <img src={NFTimg} alt="" />
      </div>

      <div className="mx-7 mt-3 md:pb-3 max-md:pb-3">
        <h2 className="font-semibold text-white text-xl max-md:text-lg font-sans">Life On Edena</h2>
        <div className="flex gap-4 items-center">
            {avatr}
            <h3 className="text-white font-mono mt-2 max-md:text-sm ">NebulaKid</h3>
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
