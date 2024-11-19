import React from 'react'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import { IoEyeOutline } from 'react-icons/io5'
import img from '../../assets/Avatars/Shroomie.png'

function NFTHighlightSection() {
  return (
    <div  className='w-full h-[640px] bg-custom-bg bg-no-repeat bg-cover relative mb-4' >
        <div className='absolute top-[358px] left-[184px] max-md:left-28 max-sm:flex-col'>
            <div className='rounded-3xl bg-[#3B3B3B] flex gap-2 w-[151px] h-[44px] justify-center items-center'>
                <Avatar img={img}/>
                <span className='text-white'>Shroomie</span>
            </div>
            <div className='flex'>
                <div>
                    <h1 className='text-white text-6xl max-md:text-2xl font-bold my-9'>Magic Mashrooms</h1>
                    <Button style="bg-white text-black w-[198px]" icon={<IoEyeOutline color='#A259FF'/>} label="See NFT"/>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default NFTHighlightSection
