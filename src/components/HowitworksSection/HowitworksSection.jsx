import React from 'react'
import SectionHeadline from '../SectionHeadline/SectionHeadline'
import InfoCard from '../InfoCard/InfoCard'
import icon1 from "../../assets/images/icon.png";
import icon2 from "../../assets/images/icon1.png";
import icon3 from "../../assets/images/icon2.png";

function HowitworksSection() {
  return (
    <div className='lg:mx-36 max-lg:mx-0 mt-20 mb-10'>
      <SectionHeadline sectionLabel="How it works" 
      description="Find out how to get started"
      />
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 mt-12'>
      
      <InfoCard img={icon1} label="Setup Your wallet" description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."/>
      <InfoCard img={icon2} label="Create Collection" description="Upload your work and setup your collection. Add a description, social links and floor price."/>
      <InfoCard img={icon3} label="Start Earning" description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."/>
      </div>
    </div>
  )
}

export default HowitworksSection
