import React, { Children } from 'react'

function Button({label , svg}) {
  return (
    <>
      <button className='bg-purple-500 w-36 rounded-2xl h-14 flex justify-center items-center gap-2 font-semibold text-base text-white'>
        {svg}
        {label}
      </button>
    </>
  )
}

export default Button
