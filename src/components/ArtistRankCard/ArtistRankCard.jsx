import React from "react";

function ArtistRankCard({ id, Avatar, name }) {
  return (
    <div className="lg:h-20 max-md:h-14 rounded-3xl bg-[#3B3B3B] hover:scale-95 duration-700">
      <div className="flex justify-around items-center mt-6">

        <div className="bg-[#2B2B2B] text-[#858584] rounded-full lg:w-8 lg:h-8 text-center max-lg:mx-3 md:w-6 md:h-6 sm:w-12 max-sm:h-6 max-sm:w-12 sm:h-6 lg:pt-1">
          {id}
        </div>

        <div className="flex gap-6 justify-center items-center basis-[360px] text-left lg:mt-3 max-lg:mt2 max-md:mt-0">
          <img
            className="lg:w-[60px] lg:h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-md:w-12 max-md:h-12  max-lg:my-3 max-md:my-1 basis-[60px]"
            src={Avatar}
          />

          <h2 className="text-white text-left basis-[300px] text-2xl font-bold max-md:text-lg">
            {name}
          </h2>         
        </div>
        <span className="basis-40 text-[#00AC4F] max-sm:hidden">+1.41%</span>
        <span className="basis-40 font-mono text-white max-md:hidden ">
          602
        </span>
        <span className="basis-40 font-mono text-white">12.4 ETH</span>
      </div>
    </div>
  );
}

export default ArtistRankCard;
