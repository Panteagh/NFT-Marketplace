import React from 'react'
import Container from '../../components/container/Container'
import Header from '../../components/Header/Header'
import TrandingCollection from '../../components/TrandingCollection/TrandingCollection'
import TopCreators from '../../components/TopCreators/TopCreators'
import BrowseCategoriesSection from '../../components/BrowseCategoriesSection/BrowseCategoriesSection'
import DiscoverMoreNFTsSection from '../../components/DiscoverMoreNFTsSection/DiscoverMoreNFTsSection'
import NFTHighlightSection from '../../components/NFTHighlightSection/NFTHighlightSection'
import HowitworksSection from '../../components/HowitworksSection/HowitworksSection'
import SubscribeWidget from '../../components/Subscribewidget/SubscribeWidget'

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
        <HowitworksSection/>
        <SubscribeWidget />
        </Container>
    </div>
  )
}

export default Home
