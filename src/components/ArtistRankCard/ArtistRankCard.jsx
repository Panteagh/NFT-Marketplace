import React from 'react'

function ArtistRankCard({id , Avatar , name}) {
  return (
    <div className='lg:h-20 rounded-3xl bg-[#3B3B3B] hover:scale-95 duration-700'>
      <div className='flex justify-around items-center mt-6'>
      <div className="bg-[#2B2B2B] text-[#858584] rounded-full w-8 h-8 lg:text-center lg:pt-[3px] lg:pr-[10px] max-lg:p md:pl-[10px] md:pt-[2px] sm:pl-[12px] sm:pt-[2px]">
        {id}
      </div>
      <div className='flex gap-6 justify-center items-center basis-[360px] text-left'>
        <img className='w-[60px] h-[60px] mt-3 basis-[60px]' src={Avatar} />
        <h2 className='text-white text-left basis-[300px] text-2xl font-bold'>{name}</h2>
      </div>
      <span className='basis-40 text-[#00AC4F] max-md:hidden'>+1.41%</span>
      <span className='basis-40 font-mono text-white  md:hidden'>602</span>
      <span className='basis-40 font-mono text-white'>12.4 ETH</span>
      </div>
    </div>
  )
}

export default ArtistRankCard
