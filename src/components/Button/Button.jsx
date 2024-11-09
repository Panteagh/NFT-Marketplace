import React, { Children } from 'react'

function Button({label , icon , style}) {
  const styled ={
    
  }
  return (
    <>
      <button className={`${style} bg-purple-500  rounded-3xl h-14 flex justify-center items-center gap-2 font-sans font-semibold text-base text-white button`}>
        {icon}
        {label}   
      </button>
    </>
  )
}

export default Button
