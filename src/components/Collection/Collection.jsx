import React from "react";
import Button from "/src/components/Button/Button";

function Collection({
  display,
  trandNFT,
  subtrandNFT1,
  subtrandNFT2,
  nameCollection,
  Avatar,
  artis,
}) {
  return (
    <div className={`${display} w-full h-[525px] flex-col mt-12`}>
      
      <div>

        <div>
          <img
            className="rounded-3xl h-[330px] w-full hover:scale-95 duration-700"
            src={trandNFT}
          />
        </div>

        <div className=" h-[100px] flex justify-between mt-5 mb-3">
          <img
            className="w-[100px] rounded-3xl hover:scale-95 duration-700"
            src={subtrandNFT1}
          />

          <img
            className="w-[100px] rounded-3xl hover:scale-95 duration-700 "
            src={subtrandNFT2}
          />

          <Button
            style="w-[100px] h-full md:h-full max-md:h-full max-lg:font-bold max-lg:text-xlg font-mono text-white"
            label="1025+"
          />
        </div>

        <span className="text-white font-bold text-lg font-sans">
          {nameCollection}
        </span>

        <div className="flex gap-3 hover:scale-95 duration-700">
          {Avatar}
          <span className="text-white text-md font-sans">
            {artis}
          </span>

        </div>
      </div>
    </div>
  );
}

export default Collection;
