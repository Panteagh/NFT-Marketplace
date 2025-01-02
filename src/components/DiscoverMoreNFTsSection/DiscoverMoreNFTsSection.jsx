import React from "react";
import SectionHeadline from "/src/components/SectionHeadline/SectionHeadline";
import NFTCard from "/src/components/NFTCard/NFTCard";
import BorderedButton from "/src/components/BorderedButton/BorderedButton";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DistantGalaxy from "/src/assets/images/DistantGalaxy.png"
import LifeOnEdena from "/src/assets/images/LifeOnEdena.png"
import AstroFiction from "/src/assets/images/AstroFiction.png"
import DigiLab from "/src/assets/Avatars/DigiLab.png"
import Keepitreal from "/src/assets/Avatars/Keepitreal.png"
import Shroomie from "/src/assets/Avatars/Shroomie.png"

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
        <Link to={`/NFTpage/${6}`} >
        <NFTCard trandingNFTsImg={DistantGalaxy} NFTname="Distant Galaxy" trandingNFTsAvatr={DigiLab}  Artistname="MoonDancer"/>
        </Link>

        <Link to={`/NFTpage/${12}`}>
        <NFTCard trandingNFTsImg={LifeOnEdena} NFTname="Life On Edena Galaxy" trandingNFTsAvatr={Keepitreal} Artistname="NebulaKid"/>
        </Link>

        <Link to={`/NFTpage/${3}`}>
        <NFTCard style="max-md:hidden" NFTname="AstroFiction" trandingNFTsImg={AstroFiction} trandingNFTsAvatr={Shroomie} Artistname="Spaceone"/>
        </Link>
      </div>
    </div>
  );
}

export default DiscoverMoreNFTsSection;
