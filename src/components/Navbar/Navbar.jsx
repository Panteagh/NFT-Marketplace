import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";
import Sidebar from "/src/components/Sidebar/Sidebar";
import NavbarMenu from "/src/components/NavbarMenu/NavbarMenu";
import { useNftMarketPlaceContext } from "/src/components/Context/NFTMarketContext";

function Navbar() {
  const { isOpen, toggelMenu } = useNftMarketPlaceContext();

  return (
    <div className="flex items-center justify-between my-6 md:mx-12 max-md:mx-4">
      <Link to="/">
        <div className="flex items-center gap-3 max-md:text-xs">
          <BsShopWindow color="#A259FF" size={32} />
          <span className="font-mono text-xl font-bold text-white max-md:text-sm">
            NFT Marketplace
          </span>
        </div>
      </Link>

      <div className={`relative ${isOpen ? "overflow-hidden" : ""}`}>
        <header className=" text-white p-4 flex justify-between items-center md:hidden">
          <button onClick={toggelMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
                fill="white"
              />
            </svg>
          </button>
        </header>
        <NavbarMenu />
        <Sidebar isOpen={isOpen} toggle={toggelMenu} />
        
      </div>
    </div>
  );
}

export default Navbar;
