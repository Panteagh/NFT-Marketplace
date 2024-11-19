import React from "react";
import img from "../../assets/images/photo.png";

function SubscribeWidget() {
  return (
    <div className="bg-[#3B3B3B] rounded-3xl lg:mx-36 max-lg:mx-0 mt-20 mb-10 h-[430px] max-w-[1095px] max-md:max-w-[690px] max-md:h-[360px]">
      <div className="flex justify-center items-center gap-20 pt-14 max-md:gap-4">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="w-[425px] h-[272px]">
          <h2 className="text-white text-5xl font-bold font-sans max-md:text-3xl">
            Join our weekly digest
          </h2>
          <p className="text-white text-2xl mt-7">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default SubscribeWidget;
