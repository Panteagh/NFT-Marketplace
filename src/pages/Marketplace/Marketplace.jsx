import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getApi } from "/src/components/services/api";
import { useNftMarketPlaceContext } from "/src/components/Context/NFTMarketContext";
import HeaderPage from "/src/components/headerPages/HeaderPage";
import Container from "/src/components/container/Container";
import NFTCard from "/src/components/NFTCard/NFTCard";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

function Marketplace() {
  const [nft, setNft] = useState([]);
  const { handelScrolling, isLoading, setIsLoading } =
    useNftMarketPlaceContext();

  useEffect(() => {
    setIsLoading(true);
    getApi().then((res) => {
      setNft(res);
      setIsLoading(false);
    });
  }, []);

  handelScrolling();

  return (
    <div className="lg:ml-32 max-sm:mx-3">
      <Container>
        <HeaderPage
          PageHeader="Browse Marketplace"
          description="Browse through more than 50k NFTs on the NFT Marketplace."
        />

        <div>
          {isLoading ? (
            <CardSkeleton />
          ) : (
            <div className="grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mx-auto gap-x-6 mt-6">
              {nft.map((item) => (
                <Link key={item.id} to={`/NFTpage/${item.id}`}>
                  <NFTCard key={item.id} {...item} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Marketplace;
