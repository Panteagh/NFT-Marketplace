import React from "react";


function InfoCard({img , label , description}) {
  return (
    <div className="bg-[#3B3B3B] rounded-3xl lg:w-[330px] lg:h-[439px] md:w-64 md:pb-2 max-md:w-52 max-md:h-80 max-sm:w-[320px] max-sm:h-[157px]">
      <div className="flex flex-col max-sm:flex-row justify-center items-center mx-9 gap-2">
        <img className="max-md:w-40 max-md:h-40 max-sm:w-24 max-sm:h-24 " src={img} alt="" />
        <div>

        <h3 className="text-white text-lg mt-4 max-sm:text-base">{label}</h3>
        <p className="text-white mt-3 max-sm:mt-2 md:mb-2 max-sm:text-sm max-sm:mb-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
