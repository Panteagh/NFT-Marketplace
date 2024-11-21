import React, { useEffect, useState } from 'react'
import HeaderPage from '../../components/headerPages/HeaderPage'
import ArtistRankCard from '../../components/ArtistRankCard/ArtistRankCard'
import { getApi} from '../../components/services/api'
import { Link } from 'react-router-dom'
import Container from '../../components/container/Container'

function Rankings() {
  const [artistRank , setArtistRank] = useState([])

  useEffect(()=>{
    getApi() .then(res =>{
      setArtistRank(res)
      
    })
  },[])

  return (
    <div>
      <Container
      >
        <HeaderPage 
     PageHeader="Top Creators" 
     description="Check out top ranking NFT artists on the NFT Marketplace."
     />

     <div> {/* Tab */}</div>
     <div className='bg-transparent border-[#858584]/50 rounded-3xl border-[1px] h-12 mt-9 '>

     <div className='flex justify-around items-center mx-5 mt-3 text-[#858584] font-mono'>
      <span className='basis-4'>#</span>
      <label className='basis-[360px] text-left'>Artist</label>
      <label className='basis-40 max-sm:hidden'>Change</label>
      <label className='basis-40 max-md:hidden'>NFTs Sold</label>
      <label className='basis-40 '>Volume</label>
     </div>


     </div>
     <div className='mt-8 mb-11'>
      {
        artistRank.map(item =>(
          <Link key={item.id} to={`/ArtistPage/${item.id}`}>
          <ArtistRankCard {...item}/>
          </Link>
        ))
      }
     </div>
      </Container>
     
    </div>
  )
}

export default Rankings
