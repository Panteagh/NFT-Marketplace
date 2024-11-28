import React from "react";


function InfoCard({img , label , description}) {
  return (
    <div className="bg-[#3B3B3B] rounded-3xl lg:w-[330px] lg:h-[439px] md:w-64 md:pb-2 max-sm:w-full max-sm:h-[157px] px-3 pb-5 hover:scale-110 duration-700">
      <div className="flex flex-col max-sm:flex-row justify-center items-center gap-2 max-sm:mt-5">
        <img className="max-md:w-20 max-md:h-24 max-sm:w-24 max-sm:h-24 " src={img} alt="" />

        <div>
        <h3 className="text-white text-lg md:mt-4 max-md:text-lg max-sm:text-base text-center">{label}</h3>
        <p className="text-white max-md:text-sm mt-3 max-sm:mt-2 md:mb-2 max-sm:text-sm max-sm:mb-3 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
