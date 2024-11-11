import React from 'react'
import img from '../../assets/images/login.png'
import Input from '../../components/inputs/Input'
import { LuUser2 } from 'react-icons/lu'
import { MdOutlineMailOutline } from 'react-icons/md'
import { CiLock } from 'react-icons/ci'
import Button from '../../components/Button/Button'

function Login() {
  return (
    <div className='flex gap-14 max-md:flex-col mx-auto'>
      <div className='w-6/12 max-md:w-full '><img className='w-full max-md:w-full max-md:h-56 object-cover' src={img} /></div>
      <div className='w-6/12 max-md:mx-auto'>
        <h1 className='lg:mt-28 md:mt-14 font-bold text-white lg:text-5xl md:text-4xl max-md:text-2xl font-sans leading-tight lg:w-96'>Create account</h1>
        <p className='mt-6 md:mt-4 text-white lg:text-2xl max-md:text-lg font-sans md:w-[460px]'>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
        <div className='w-80 mt-6 md:mt-5 max-md:w-full'>
            <Input label="Username" icon={<LuUser2 />}/>
            <Input label="Email Address" icon={<MdOutlineMailOutline />}/>
            <Input label="Password" icon={<CiLock />}/>
            <Input label="Confirm Password" icon={<CiLock />}/>
            <Button style="w-full max-lg:w-full mt-7 md:mt5" label="Create account"/>
        </div>
      </div>
    </div>
  )
}

export default Login
