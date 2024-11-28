import React, { useEffect, useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import BorderedButton from "../BorderedButton/BorderedButton";
import { getApi} from "../services/api";
import ArtistCard from "../ArtistCard/ArtistCard";
import { Link } from "react-router-dom";
import SectionHeadline from "../SectionHeadline/SectionHeadline";

function TopCreators() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getApi().then((res) => {
      setArtists(res);
    });
  }, []);

  return (
    <div className="lg:mx-36 mt-20 mb-10">
      <div className="flex justify-between mt-4 mr-11">
        <SectionHeadline
          sectionLabel="Top creators"
          description="Checkout Top Rated Creators on the NFT Marketplace"
        />
        <div className=" max-md:hidden">
        <Link to="/Rankings">
          <BorderedButton
            style="w-[247px] mt-8 "
            icon={<HiOutlineRocketLaunch color="#A259FF" />}
            label="View Rankings"
          />
        </Link>
        </div>
      </div>

      <div className="  grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 justify-between gap-4 mt-4">

        {artists.map((item) => (
          <Link key={item.id} to={`/ArtistPage/${item.id}`}>
            <ArtistCard {...item} />
          </Link>         
        ))}

      </div>
    </div>
  );
}

export default TopCreators;
