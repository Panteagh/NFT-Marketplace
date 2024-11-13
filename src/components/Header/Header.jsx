import React from "react";
import Button from "../Button/Button";
import { PiRocketLaunch } from "react-icons/pi";
import assets from "../../assets/HeaderGif/hesder.gif";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex items-center max-md:flex-col-reverse basis-auto mt-20 lg:ml-40 gap-7 max-md:w-11/12 space ">
      <div className="lg:w-5/12">
      
        <h1 className="headerh1 font-bold text-white lg:text-6xl md:text-4xl max-md:text-2xl font-sans leading-tight lg:w-96">
          Discover digital art & Collect NFTs
        </h1>

        <p className="text-white font-sans lg:text-2xl mt-6 mb-10 font-normal leading-snug md:text-lg headerP">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>

        <Link to="/login">
          <Button
            style="w-56 max-md:w-full"
            icon={<PiRocketLaunch />}
            label="Get Started"
          />
        </Link>

        <div className="flex justify-between text-white mt-12 ">
          <div>

            <p className="font-bold text-3xl font-mono max-md:text-2xl ">
              240k+{" "}
            </p>

            <p className="text-xl font-medium font-sans md:text-lg max-md:text-base">
              Total Sale
            </p>

          </div>

          <div>
            <p className="font-bold text-3xl font-mono max-md:text-2xl  ">
              100k+
            </p>

            <p className="text-xl font-medium font-sans md:text-lg max-md:text-base">
              Auctions
            </p>
            
          </div>
          <div>

            <p className="font-bold text-3xl font-mono max-md:text-2xl ">
              240k+
            </p>

            <p className="text-xl font-medium font-sans md:text-lg max-md:text-base">
              Artists
            </p>

          </div>
        </div>
      </div>

      <div className="w-3/5 max-md:w-3/4 ">
        <img src={assets} alt="Nft Market" />
      </div>

    </div>
  );
}

export default Header;
