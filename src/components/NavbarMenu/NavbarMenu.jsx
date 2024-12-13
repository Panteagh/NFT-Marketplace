import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import Button from "../Button/Button";
import React from "react";

const NavbarMenu = () => {
  return (
    <div className="hidden md:flex space-x-4 p-4 w-full">
      <ul className="flex justify-center items-center list-none gap-16 font-medium text-base text-white font-serif NavbarRes ">
        <Link to="/Marketplace">
          <li className="hover:scale-95 duration-700">Marketplace</li>
        </Link>

        <Link to="/Rankings">
          <li className="hover:scale-95 duration-700">Rankings</li>
        </Link>

        <Link to="/Wallet">
          <li className="hover:scale-95 duration-700">Connect a wallet</li>
        </Link>
      </ul>

      <Link to="/login">
        <Button style="w-32 text-white" icon={<GoPerson />} label="Sign Up" />
      </Link>
    </div>
  );
};

export default NavbarMenu;
