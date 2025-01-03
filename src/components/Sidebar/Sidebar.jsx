import React from "react";
import { Link} from "react-router-dom";
import Button from "/src/components/Button/Button";
import { GoPerson } from "react-icons/go";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 w-64 bg-[#353434] h-full shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <button className="absolute top-4 right-4 text-gray-600" onClick={toggle}>
        Close
      </button>

      <div className="flex flex-col-reverse justify-center items-center mt-10">
        <ul className="flex flex-col-reverse justify-center items-center list-none gap-16 font-medium text-base text-white font-serif NavbarRes ">
          <Link to="/Marketplace" onClick={toggle}>
            <li className="hover:scale-95 duration-700" >Marketplace</li>
          </Link>

          <Link to="/Rankings" onClick={toggle}>
            <li className="hover:scale-95 duration-700">Rankings</li>
          </Link>

          <Link to="/Wallet" onClick={toggle}>
            <li className="hover:scale-95 duration-700">Connect a wallet</li>
          </Link>
        </ul>

        <Link to="/login" onClick={toggle}>
          <Button
            style="w-full text-white font-serif my-9"
            icon={<GoPerson />}
            label="Sign Up"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
