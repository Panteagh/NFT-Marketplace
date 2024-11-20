import React, { useEffect, useState } from "react";
import HeaderPage from "../../components/headerPages/HeaderPage";
import Container from "../../components/container/Container";
import { getNFTs } from "../../components/services/api";
import NFTCard from "../../components/NFTCard/NFTCard";

function Marketplace() {
  const [nft, setNft] = useState([]);

  useEffect(() => {
    getNFTs().then((res) => {
      setNft(res);
    });
  }, []);

  return (
    <div className="lg:ml-32 max-sm:mx-3">
      <Container>
        <HeaderPage
          PageHeader="Browse Marketplace"
          description="Browse through more than 50k NFTs on the NFT Marketplace."
        />

        <div className="grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mx-auto gap-x-6">
          {
          nft.map((item)=>(
            <NFTCard key={item.id} {...item}/>
          ))
        }
        </div>
      </Container>
    </div>
  );
}

export default Marketplace;
