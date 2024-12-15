import React from "react";
import img from "/src/assets/images/Photo.png";
import SubscribeForm from "/src/components/SubscribeForm/SubscribeForm";

function SubscribeWidget() {
  return (
    <div className="bg-[#3B3B3B] max-sm:bg-transparent rounded-3xl lg:mx-36 max-lg:mx-0 md:mt-20 md:mb-20 md:h-[430px] max-w-[1095px] max-md:max-w-[690px] px-5 py-12">
      <div className="">
        <div className="flex max-md:flex-col justify-center items-center gap-20 max-md:gap-4">
          <div className="h-full">
            <img className="h-full" src={img} alt="" />
          </div>
          <div className="md:w-[425px] md:h-[272px] max-md:[315px]">
            <h2 className="text-white text-5xl font-bold font-sans max-md:text-2xl">
              Join our weekly digest
            </h2>
            <p className="text-white text-2xl  max-md:text-base mt-7 max-md:mt-4">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <SubscribeForm label="Enter your email here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeWidget;
