import React from 'react'
import SectionHeadline from '/src/components/SectionHeadline/SectionHeadline'
import InfoCard from '/src/components/InfoCard/InfoCard'
import icon1 from "/src/assets/images/Icon.png";
import icon2 from "/src/assets/images/Icon1.png";
import icon3 from "/src/assets/images/Icon2.png";

function HowitworksSection() {
  return (
    <div className='lg:mx-36 max-lg:mx-0 mt-20 mb-10'>
      <SectionHeadline sectionLabel="How it works" 
      description="Find out how to get started"
      />
      <div className='grid grid-cols-3  max-md:grid-cols-1 gap-3 mt-12'>
      
      <InfoCard img={icon1} label="Setup Your wallet" description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."/>
      <InfoCard img={icon2} label="Create Collection" description="Upload your work and setup your collection. Add a description, social links and floor price."/>
      <InfoCard img={icon3} label="Start Earning" description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."/>
      </div>
    </div>
  )
}

export default HowitworksSection
