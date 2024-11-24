import React from 'react'

function Tag({label}) {
  return (
    <div className='bg-[#3B3B3B] rounded-3xl p-2 w-fit'>
     <label className='text-white text-lg mx-3 max-md:text-sm'>{label}</label>
    </div>
  )
}

export default Tag
