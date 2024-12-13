import React from "react";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useNftMarketPlaceContext } from "/src/components/Context/NFTMarketContext";
import Button from "/src/components/Button/Button";
import Input from "/src/components/inputs/Input";
import HeaderPage from "/src/components/headerPages/HeaderPage";
import img from "/src/assets/images/login.png";

function Login() {

  const { handelScrolling } = useNftMarketPlaceContext();
  handelScrolling();

  return (
    <div className="flex gap-14 max-md:flex-col mx-auto max-md:pb-9">
      <div className="w-2/4 max-md:w-full">
        <img className="w-full max-md:h-56 object-cover" src={img} />
      </div>

      <div className="w-6/12 max-md:mx-auto">
        <HeaderPage
          PageHeader="Create account"
          description=" Welcome! enter your details and start creating, collecting and selling
          NFTs."
        />

        <div className="w-80 mt-6 md:mt-5 max-md:w-full pr-9">
          <Input label="Username" icon={<LuUser2 />} />
          <Input label="Email Address" icon={<MdOutlineMailOutline />} />
          <Input label="Password" icon={<CiLock />} />
          <Input label="Confirm Password" icon={<CiLock />} />
          <Button
            style="w-full max-lg:w-full mt-7 md:mt5 text-white"
            label="Create account"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
