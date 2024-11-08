import React, { Children } from 'react'

function Button({label , svg , size}) {
  return (
    <>
      <button className={`bg-purple-500 mx-5 rounded-2xl h-14 flex justify-center items-center gap-2 font-sans font-semibold text-base text-white button`}>
        {svg}
        {label}
      </button>
    </>
  )
}

export default Button
