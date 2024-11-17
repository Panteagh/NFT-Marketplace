import React from "react";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import NFTCard from "../NFTCard/NFTCard";
import BorderedButton from "../BorderedButton/BorderedButton";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function DiscoverMoreNFTsSection() {
  return (
    <div className="lg:mx-36 max-lg:mx-3 mt-20 mb-10">
        <div className="flex justify-between">
      <SectionHeadline
        sectionLabel="Discover More NFTs"
        description="Explore new trending NFTs"
      />
    <BorderedButton style="w-[167px] h-[60px]" icon={<IoEyeOutline color="#A259FF"/>} label="See All"/>
        </div>
      <div className="mt-12 grid grid-cols-3 max-lg:grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1" >
        <Link to="/Marketplace" >
        <NFTCard />
        </Link>

        <Link to="/Marketplace">
        <NFTCard />
        </Link>

        <Link to="/Marketplace">
        <NFTCard style="max-md:hidden" />
        </Link>
      </div>
    </div>
  );
}

export default DiscoverMoreNFTsSection;
