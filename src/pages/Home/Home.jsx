import React from 'react'
import Container from '../../components/container/Container'
import Header from '../../components/Header/Header'
import TrandingCollection from '../../components/TrandingCollection/TrandingCollection'

function Home() {
  return (
    <div>
      <Container>
        <Header /> 
        <TrandingCollection />
      </Container>
    </div>
  )
}

export default Home
