import React from "react";

function ArtistCard({ id, name, Avatar }) {
  return (
    <div className="bg-[#3B3B3B] rounded-3xl lg:w-60 lg:h-[238px] relative md:w-[330px] sm:w-[315px] md:h-[100px] max-sm:h-[100px] my-3 hover:scale-95 duration-700 ">
      
      <div className="bg-[#2B2B2B] text-[#858584] rounded-full w-8 h-8 lg:text-center absolute top-5 left-5 md:top-3 sm:top-3 md:left-7 max-sm:left-8 max-sm:top-4 lg:pt-[3px] lg:pr-[10px] max-lg:p md:pl-[10px] md:pt-[2px] sm:pl-[12px] sm:pt-[2px] max-sm:pl-3 max-sm:pt-1">
        {id}
      </div>

      <div className="flex lg:flex-col md:flex-row justify-center items-center md:mt-4 sm:p-4 max-sm:gap-3 max-sm:mt-3">
        <img
          className="rounded-full lg:mt-5 lg:w-[110px] lg:h-[115px] md:w-[60px] md:h-[60px] max-md:w-[60px] max-md:h-[60px] max-sm:w-[60px] max-sm:h-[60px] md:mr-4 sm:mr-5 max-sm:mt-5"
          src={Avatar}
        />

        <div>
          <label className="lg:text-center block text-white font-bold lg:mt-4 text-lg md:text-left">
            {name}
          </label>

          <div className="flex justify-between lg:gap-2 md:gap-4 items-center lg:mt-2 md:mt-1 max-sm:gap-3">           
            <label className="text-[#858584] text-base"> Total Sales:</label>
            <span className="text-white font-mono font-bold"> 34.53 ETH</span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
