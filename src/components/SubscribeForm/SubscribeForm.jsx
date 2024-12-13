import React from "react";
import Input from "/src/components/inputs/Input";
import Button from "/src/components/Button/Button";

function SubscribeForm({style}) {
  return (
    <div>
      <div className={`${style} lg:flex-row max-md:flex-col md:flex-col justify-center items-center gap-3 text-left`}>
        <div className="w-full md:w-[250px]">
          <Input
            style="lg:w-[179px] md:w-[100px] max-md:w-[100px] "
            placeholder="Enter your email here"
          />
        </div>
        <div className="w-full md:w-[250px] mt-2">
          <Button
            style="h-[40px] max-md:w-full md:w-full  max-sm:mt-4 lg:right-0 rounded-2xl text-white top-7"
            label="Subscribe"
          />
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
