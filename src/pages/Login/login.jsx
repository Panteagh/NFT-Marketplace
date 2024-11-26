import React from "react";
import img from "../../assets/images/login.png";
import Input from "../../components/inputs/Input";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Button from "../../components/Button/Button";
import HeaderPage from "../../components/headerPages/HeaderPage";

function Login() {
  return (
    <div className="flex gap-14 max-md:flex-col mx-auto max-md:pb-9">
      <div >
        <img
          className="w-full max-md:h-56 object-cover"
          src={img}
        />
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
