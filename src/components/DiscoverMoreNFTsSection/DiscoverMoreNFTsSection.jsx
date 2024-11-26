import React from "react";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import NFTCard from "../NFTCard/NFTCard";
import BorderedButton from "../BorderedButton/BorderedButton";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DistantGalaxy from "../../assets/images/DistantGalaxy.png"
import LifeOnEdena from "../../assets/images/LifeOnEdena.png"
import AstroFiction from "../../assets/images/AstroFiction.png"
import DigiLab from "../../assets/Avatars/DigiLab.png"
import Keepitreal from "../../assets/Avatars/Keepitreal.png"
import Shroomie from "../../assets/Avatars/Shroomie.png"

function DiscoverMoreNFTsSection() {
  return (
    <div className="lg:mx-36 max-lg:mx-3 mt-20 mb-10">
        <div className="flex justify-between">
      <SectionHeadline
        sectionLabel="Discover More NFTs"
        description="Explore new trending NFTs"
      />
      <Link to="/Marketplace">
    <BorderedButton style="w-[167px] h-[60px] max-sm:hidden" icon={<IoEyeOutline color="#A259FF"/>} label="See All"/>
      </Link>
        </div>
      <div className="mt-12 grid grid-cols-3 max-lg:grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1" >
        <Link to="/Marketplace" >
        <NFTCard NFTimg={DistantGalaxy} NFTname="Distant Galaxy" Avatar={DigiLab}  Artistname="MoonDancer"/>
        </Link>

        <Link to="/Marketplace">
        <NFTCard NFTimg={LifeOnEdena} NFTname="Life On Edena Galaxy" Avatar={Keepitreal} Artistname="NebulaKid"/>
        </Link>

        <Link to="/Marketplace">
        <NFTCard style="max-md:hidden" NFTname="AstroFiction" NFTimg={AstroFiction} Avatar={Shroomie} Artistname="Spaceone"/>
        </Link>
      </div>
    </div>
  );
}

export default DiscoverMoreNFTsSection;
