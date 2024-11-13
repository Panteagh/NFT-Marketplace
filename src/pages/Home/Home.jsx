import React from 'react'
import Container from '../../components/container/Container'
import Header from '../../components/Header/Header'
import TrandingCollection from '../../components/TrandingCollection/TrandingCollection'
import TopCreators from '../../components/TopCreators/TopCreators'

function Home() {
  return (
    <div>
      <Container>
        <Header /> 
        <TrandingCollection />
        <TopCreators />
      </Container>
    </div>
  )
}

export default Home
