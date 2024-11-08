import React from 'react'
import { BsShopWindow } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { GoPerson } from 'react-icons/go'

function Navbar() {
  return (
    <div className='flex  items-center justify-between my-6 mx-12'>
          <Link to="/"> 
        <div className='flex items-center gap-3'>
          <BsShopWindow color='#A259FF' size={32}/> <span className='font-mono text-xl font-bold text-white max-md:text-xs'>NFT Marketplace</span>
            </div>
           </Link>
        <div className='flex justify-center items-center gap-16'>
            <ul className='flex justify-center items-center list-none gap-16 font-medium text-base text-white font-serif'>
            <Link to="/Marketplace"><li>Marketplace</li></Link>
            <Link to="/Rankings"><li>Rankings</li></Link>
            <Link to="/Wallet"><li>Connect a wallet</li></Link>
            </ul>
            <Button svg={<GoPerson size={20}/>} label ="Sign Up" />
            </div>
      
    </div>
  )
}

export default Navbar
