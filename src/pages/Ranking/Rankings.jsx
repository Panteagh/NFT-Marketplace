import React, { useEffect, useState } from "react";
import { getApi } from "/src/components/services/api";
import { useNftMarketPlaceContext } from "/src/components/Context/NFTMarketContext";
import { Link } from "react-router-dom";
import HeaderPage from "/src/components/headerPages/HeaderPage";
import ArtistRankCard from "/src/components/ArtistRankCard/ArtistRankCard";
import Container from "/src/components/container/Container";
import ListSkeleton from "../../components/ListSkeleton/ListSkeleton";

function Rankings() {
  const [artistRank, setArtistRank] = useState([]);
  const { handelScrolling , isLoading , setIsLoading} = useNftMarketPlaceContext();

  useEffect(() => {
    setIsLoading(true)
    getApi().then((res) => {
      setArtistRank(res);
      setIsLoading(false)
        });
  }, []);
  
  handelScrolling();

  return (
    <div>
      <Container>
        <HeaderPage
          PageHeader="Top Creators"
          description="Check out top ranking NFT artists on the NFT Marketplace."
        />

        <div className="bg-transparent border-[#858584]/50 rounded-3xl border-[1px] h-12 mt-9 ">
          <div className="flex justify-around items-center mx-5 mt-3 text-[#858584] font-mono">
            <span className="basis-4">#</span>
            <label className="basis-[360px] text-left">Artist</label>
            <label className="basis-40 max-sm:hidden">Change</label>
            <label className="basis-40 max-md:hidden">NFTs Sold</label>
            <label className="basis-40 ">Volume</label>
          </div>
        </div>
        <div>
          {
            isLoading ? 
            <ListSkeleton  /> 
            : 
             <div className="mt-8 mb-11">
          {artistRank.map((item) => (
            <Link key={item.id} to={`/ArtistPage/${item.id}`}>
              <ArtistRankCard {...item} />
            </Link>
          ))}
        </div>
          } 
        </div>

        
      </Container>
    </div>
  );
}

export default Rankings;
