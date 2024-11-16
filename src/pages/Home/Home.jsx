import React from 'react'
import Container from '../../components/container/Container'
import Header from '../../components/Header/Header'
import TrandingCollection from '../../components/TrandingCollection/TrandingCollection'
import TopCreators from '../../components/TopCreators/TopCreators'
import BrowseCategoriesSection from '../../components/BrowseCategoriesSection/BrowseCategoriesSection'

function Home() {
  return (
    <div>
      <Container>
        <Header /> 
        <TrandingCollection />
        <TopCreators />
        <BrowseCategoriesSection />
      </Container>
    </div>
  )
}

export default Home
