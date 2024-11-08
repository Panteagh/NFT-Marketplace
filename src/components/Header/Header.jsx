import React from "react";
import Button from "../Button/Button";
import { PiRocketLaunch } from "react-icons/pi";
import assets from "../../assets/HeaderGif/hesder.gif";

function Header() {
  return (
    <div className="flex basis-auto  mt-20">
      <div className="w-5/12">
        <h1 className=" font-bold text-white text-6xl font-sans leading-tight">
          Discover <br /> digital art & <br /> Collect NFTs
        </h1>
        <p className="text-white font-sans text-2xl mt-6 mb-10 font-normal leading-snug">
          NFT marketplace UI created with Anima for Figma.
          <br /> Collect, buy and sell art from more than 20k NFT artists.
        </p>
        <Button style="w-56" icon={<PiRocketLaunch />} label="Get Started" />
        <div className="flex justify-between text-white mt-12">
          
          <div >
            <p className="font-bold text-3xl font-mono">240k+ </p>
            <p className="text-xl font-medium font-sans ">Total Sale</p>
            </div>

          <div>
            <p className="font-bold text-3xl font-mono">100k+</p>
            <p className="text-xl font-medium font-sans ">Auctions</p>
          </div>
          <div> 
            <p className="font-bold text-3xl font-mono">240k+</p>
            <p className="text-xl font-medium font-sans ">Artists</p>
          </div>
        </div>
      </div>
      <div className="flex w-2/5">
        <img src={assets} alt="" />
      </div>
    </div>
  );
}

export default Header;
