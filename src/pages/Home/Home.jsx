import React from "react";
import Container from "/src/components/container/Container";
import Header from "/src/components/Header/Header";
import TrandingCollection from "/src/components/TrandingCollection/TrandingCollection";
import TopCreators from "/src/components/TopCreators/TopCreators";
import BrowseCategoriesSection from "/src/components/BrowseCategoriesSection/BrowseCategoriesSection";
import DiscoverMoreNFTsSection from "/src/components/DiscoverMoreNFTsSection/DiscoverMoreNFTsSection";
import NFTHighlightSection from "/src/components/NFTHighlightSection/NFTHighlightSection";
import HowitworksSection from "/src/components/HowitworksSection/HowitworksSection";
import SubscribeWidget from "/src/components/Subscribewidget/SubscribeWidget";

function Home() {
  return (
    <div>
      <Container>
        <Header />
        <TrandingCollection />
        <TopCreators />
        <BrowseCategoriesSection />
        <DiscoverMoreNFTsSection />
      </Container>
      <NFTHighlightSection />
      <Container>
        <HowitworksSection />
        <SubscribeWidget />
      </Container>
    </div>
  );
}

export default Home;
