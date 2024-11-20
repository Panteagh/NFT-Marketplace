import React from 'react'

function WalletOptionsButton({label , icon , style}) {
  return (
    <>
      <button className={`${style} bg-[#3B3B3B] border-purple-700 border-2 rounded-3xl h-14 flex justify-center items-center gap-2 font-sans font-semibold text-base  button transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 my-5`}>
        <div className='flex justify-center items-center text-white gap-4 mx-12'>
        <div >
        {icon}
        </div>
        <label className='w-48 max-md:w-28 text-left text-lg md:text-base max-md:text-sm'> {label}  </label> 
        </div>
      </button>
    </>
  )
}

export default WalletOptionsButton
