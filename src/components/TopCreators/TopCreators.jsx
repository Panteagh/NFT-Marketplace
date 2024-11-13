import React, { useEffect, useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import BorderedButton from "../BorderedButton/BorderedButton";
import { getCreators } from "../../assets/services/api";
import ArtistCard from "../ArtistCard/ArtistCard";

function TopCreators() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getCreators().then((res) => {
      setArtists(res);
    });
  }, []);

  console.log(artists);

  return (
    <div className="lg:mx-36 mt-20">
      <h2 className="font-bold text-white lg:text-4xl md:text-3xl max-md:text-xl font-sans leading-tight">
        Top creators
      </h2>
      <div className="flex justify-between mt-4">
        <p className="text-white lg:text-2xl max-md:text-lg font-sans mt-4">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
        <BorderedButton
          style="w-[247px] max-md:hidden"
          icon={<HiOutlineRocketLaunch color="#A259FF" />}
          label="View Rankings"
        />
      </div>
      <div className="  grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 justify-between mt-4">
        {artists.map((item) => (
          <ArtistCard {...item} />
        ))}
      </div>
    </div>
  );
}

export default TopCreators;
